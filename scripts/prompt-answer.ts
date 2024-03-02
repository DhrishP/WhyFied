import { OpenAI } from "openai";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const testPrompt = async (prompt: string) => {
  try {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const input = prompt.replace(/\n/g, " ");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });
    const fetchEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: input,
    });
    const [{ embedding }] = fetchEmbedding.data;
    let { data, error } = await supabaseAdmin.rpc("chunk_fetcher", {
      match_count: 1,
      similarity_threshold: 0.1,
      query_embedding: embedding,
    });
    if (!data || error) {
      console.log("error", error);
      return null;
    }
    // console.log(data);
    const searchPrompt = `  Use the following passages to understand context of the philosopher and answer the query "${prompt}" based on it
    the passages are:${data
      ?.map((d: any) => d.work_content)
      .join(
        "\n\n"
      )} in first person perspective as you are marcus aerulius the great stoic philosopher.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k-0613",
      messages: [
        {
          role: "system",
          content:
            'You are marcus aerulius the great stoic philosopher who talks in "first person perspective", you give answers to the given question with different perspective based on your current knowledge. Remember to write answer assuming the user is a begineer in philosophy under 180 words',
        },
        { role: "user", content: searchPrompt },
      ],
      temperature: 0.2,
      max_tokens: 250,
      stream: false,
    });
    console.log("\nAnswer\n", response.choices[0].message.content);
  } catch (error) {
    console.log("Error", error);
  }
};

(async () => {
  await testPrompt(
    "What would your life look like if you acted more rationally, exhibiting wisdom and self-discipline in every aspect??I want a concise answer from you which makes me question things and makes me self-reflect about my life. don't talk general but give me a nuanced answer"
  );
})();
