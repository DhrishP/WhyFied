import { OpenAI } from "openai";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import {prisma} from '@/lib/prisma'

dotenv.config();

const testPrompt = async (prompt: string) => {
  try {
    const res = await prisma.model.findMany()
    if(!res) return null
    const modelArray = res.find((model) => {
      if(model.name === 'Marcus'){
      return {
        id: model.id,
        name: model.name,
        description:model.description
      };
      }
    });
    if(modelArray === undefined) return null
    console.log(modelArray)
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
          content:modelArray.description??"",
        },
        { role: "user", content: searchPrompt },
      ],
      temperature: 0.9,
      max_tokens: 100,
      stream: false,
    });
    console.log("\nAnswer\n", response.choices[0].message.content);
  } catch (error) {
    console.log("Error", error);
  }
};

(async () => {
  await testPrompt(
    'I want a WHY question from you which makes me question things and makes me self-reflect about my life. my interests are related to what makes humans creative. It would be great if you can give ten questions which is related to my interests. make them deep as possible , no other talks. Dont ask generalized questions but instead ask nuanced questions that a normal eyes cannot see'
  );
})();
