import { OpenAI } from "openai";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { StreamingTextResponse, OpenAIStream } from "ai";

export async function POST(req: Request) {
  try {
    const { prompt, description, searchPromptModel } = await req.json();
    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
    const input = prompt.replace(/\n/g, " ");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });
    const fetchEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: input,
    });
    const [{ embedding }] = fetchEmbedding.data;
    let { data, error } = await supabaseAdmin.rpc('chunk_fetcher', {
      match_count: 1,
      similarity_threshold: 0.01,
      query_embedding: embedding,
    });
    if (error) {
      console.log("error", error);
      return NextResponse.json({ status: 500, body: "Internal Server Error" });
    }
    const searchPrompt = `Use the following passages to understand context of the philosopher and answer the query "${prompt}" based on it
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
          content: description,
        },
        { role: "user", content: searchPrompt },
      ],
      temperature: 0.2,
      max_tokens: 150,
      stream: true,
    });
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
