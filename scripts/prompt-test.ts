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
    console.log(embedding);
    let { data, error } = await supabaseAdmin.rpc("chunk_fetcher", {
      match_count: 1,
      similarity_threshold: 0.01,
      query_embedding: embedding,
    });
    if (!data || error) {
      console.log("error", error);
      return null;
    }
    console.log(data);
    const searchPrompt = `  Use the following passages to understand context of the philosopher and answer the query "${prompt}" based on it
    the passages are:${data?.map((d: any) => d.work_content).join("\n\n")} in first person perspective as you are marcus aerulius the great stoic philosopher.`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k-0613",
      messages: [
        {
          role: "system",
          content:
            'You are marcus aerulius the great stoic philosopher who talks in "first person perspective", you give various perspectives of a asked question based on your philosophy. answer like you are marcus aerulius . the response should be concise and to the point with different perspectives. keep your response under 200 words , remember to talk in first person perspective',
        },
        { role: "user", content: searchPrompt },
      ],
      temperature: 0.1,
      max_tokens: 240,
      stream: false,
    });
    console.log("\nAnswer\n", response.choices[0].message.content);
  } catch (error) {
    console.log("Error", error);
  }
};

(async () => {
  await testPrompt(
    "what was our previous conversation about?"
  );
})();
