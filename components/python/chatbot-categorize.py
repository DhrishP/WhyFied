import os
import shutil
import anthropic
import base64
import mimetypes
from dotenv import load_dotenv
from termcolor import colored

# Load environment variables from .env file
load_dotenv()

# Initialize Anthropic client with API key from environment variable
client = anthropic.Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

def get_file_description(file_path):
    """
    Get the description of a file using the Haiku model.
    """
    mime_type, _ = mimetypes.guess_type(file_path)
    print(colored(f"Processing file: {file_path}", "blue"))
    print(colored(f"\nMIME type: {mime_type}", "yellow"))
   
    if mime_type and mime_type.startswith('text/'):
        with open(file_path, 'r') as f:
            file_content = f.read().strip()[:10000]  # Get first 10,000 characters of file content
       
        response = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=1000,
            messages=[
                {
                    "role": "user",
                    "content": f"""
                    Describe this text file. This is the name of the file: <name>{os.path.basename(file_path)}</name>.
                    Here is a portion of the file:
                    <contents>
                    {file_content}
                    </contents>
                    Wrap the description in <description></description> tags. Keep your response concise and to the point - no more than 30 words.
                    """
                }
            ],
            stop_sequences=["</description>"]
        )
    elif mime_type and mime_type.startswith('image/'):
        with open(file_path, 'rb') as f:
            file_data = base64.b64encode(f.read()).decode('utf-8')
   
        response = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=1000,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "data": file_data,
                                "media_type": mime_type
                            }
                        },
                        {
                            "type": "text",
                            "text": f"""
                            Describe the contents of the image file. This is the name of the file: {os.path.basename(file_path)}.
                            Wrap the description in <description></description> tags. Keep your response concise and to the point - Maximum of 30 words.
                            """
                        }
                    ]
                }
            ],
            stop_sequences=["</description>"]
        )
    else:
        response = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=1000,
            messages=[
                {
                    "role": "user",
                    "content": f"""
                    Describe the contents of this file. This is the name of the file: <name>{os.path.basename(file_path)}</name>.
                    Wrap the description in <description></description> tags. Keep your response concise and to the point - 5-10 words should be enough.
                    """
                }
            ],
            stop_sequences=["</description>"]
        )
   
    description = response.content[0].text.strip().split('<description>')[1].split('</description>')[0]
    print(colored(f"File description: {description}", "green"))
    return description

def get_category_suggestion(file_descriptions):
    """
    Get category suggestions for the given file descriptions using the Opus model.
    """
    response = client.messages.create(
        model="claude-3-opus-20240229",
        max_tokens=1000,
        messages=[
            {
                "role": "user",
                "content": f"""
                You are given a list of file descriptions. You need to categorize these files into different categories. Here are the file descriptions:
                <file_descriptions>
                {', '.join(file_descriptions)}
                </file_descriptions>
                You need to suggest up to 10 categories for these files. Wrap the categories in <categories></categories> tags, and separate them with commas, like `, `. Keep your response concise and to the point - they should be valid folder names, like example, or example-category. No restricted characters, please.
                """
            }
        ],
        stop_sequences=["</categories>"]
    )
   
    categories = response.content[0].text.strip().split('<categories>')[1].split('</categories>')[0].split(', ')
    print(colored(f"Suggested categories: {categories}", "green"))
    return categories

def get_file_category(file_description, categories):
    """
    Get the category for a file based on its description using the Haiku model.
    """
    response = client.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=1000,
        messages=[
            {
                "role": "user",
                "content": f"""
                You are given a file description. You need to suggest a category for this file. Here is the file description:
                <file_description>
                {file_description}
                </file_description>
                You need to suggest a category for this file. Wrap the category in <category></category> tags. Here is a list of the categories you can choose from:
                <categories>
                {str(categories)}
                </categories>
                ONLY USE these categories!!!! Nothing else!!!!!
                """
            }
        ],
        stop_sequences=["</category>"]
    )
   
    category = response.content[0].text.strip().split('<category>')[1].split('</category>')[0]
    print(colored(f"File category: {category}", "green"))
    return category

def main():
    """
    Main function to categorize files in a folder.
    """
    folder_path = input("Enter the folder path: ")
   
    files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
    print(colored(f"Files found: {files}", "blue"))
   
    file_descriptions = []
    for file in files:
        file_path = os.path.join(folder_path, file)
        try:
            description = get_file_description(file_path)
            file_descriptions.append(f"{file}: {description}")
        except Exception as e:
            print(colored(f"Error processing file {file}: {str(e)}", "red"))
   
    try:
        categories = get_category_suggestion(file_descriptions)
    except Exception as e:
        print(colored(f"Error getting category suggestions: {str(e)}", "red"))
        return
   
    for category in categories:
        os.makedirs(os.path.join(folder_path, category), exist_ok=True)
   
    for file in files:
        file_path = os.path.join(folder_path, file)
        try:
            description = get_file_description(file_path)
            category = get_file_category(description, categories)
            shutil.move(file_path, os.path.join(folder_path, category, file))
            print(colored(f"Moved file {file} to category {category}", "green"))
        except Exception as e:
            print(colored(f"Error categorizing file {file}: {str(e)}", "red"))
   
    print(colored("\nFile categorization completed.", "green"))

if __name__ == "__main__":
    main()