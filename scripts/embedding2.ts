import { OpenAI } from "openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import dotenv from "dotenv";
import { encode } from "gpt-tokenizer/model/gpt-3.5-turbo-0301";
import { createClient } from "@supabase/supabase-js";
dotenv.config();

const createEmbedding = async (
  title: string,
  author: string,
  content: string,
  i: number
) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  const JSONContent = {
    title: title,
    author: author,
    content: content,
  };
  if (encode(JSON.stringify(JSONContent)).length > 8000) {
    const midpoint = Math.floor(JSON.stringify(JSONContent).length / 2);
    const firstHalf = JSON.stringify(JSONContent).slice(0, midpoint);
    console.log(encode(JSON.stringify(firstHalf)).length);
    const secondHalf =JSON.stringify(JSONContent).slice(midpoint);
    console.log(encode(JSON.stringify(secondHalf)).length);
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });
    const response = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: firstHalf,
    });
    const [{ embedding: embedding1 }] = response.data;
    const { error: error1 } = await supabase
      .from("philosophy_data")
      .insert({
        work_title: title,
        work_author: author,
        work_content: content,
        work_references: "What is it like to be a bat by Thomas Nagel.",
        embeddings: embedding1,
      })
      .select("*");
    if (error1) {
      console.log("error", error1);
    } else {
      console.log("saved", `${i} ka first half`);
    }
    await new Promise((resolve) => setTimeout(resolve, 20000));
    const response2 = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: secondHalf,
    });
    const [{ embedding: embedding2 }] = response2.data;
    const { error } = await supabase
      .from("philosophy_data")
      .insert({
        work_title: title,
        work_author: author,
        work_content: content,
        work_references: "What is it like to be a bat by Thomas Nagel.",
        embeddings: embedding2,
      })
      .select("*");
    if (error) {
      console.log("error", error);
    } else {
      console.log("saved", `${i} ka second half`);
    }
    return null;
  }
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY2 });
  const response = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: JSON.stringify(JSONContent),
  });
  const [{ embedding }] = response.data;

  const { error } = await supabase
    .from("philosophy_data")
    .insert({
      work_title: title,
      work_author: author,
      work_content: content,
      work_references: "What is it like to be a bat by Thomas Nagel.",
      embeddings: embedding,
    })
    .select("*");
  if (error) {
    console.log("error", error);
  } else {
    console.log("saved", i);
  }
};

export const createEmbeddings = async () => {
  const loader = new PDFLoader("public/docs/thomas2.pdf", {
    parsedItemSeparator: "",
    splitPages: false,
  });
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 25300,
    chunkOverlap: 1500,
  });

  const output = await splitter.createDocuments([docs[0].pageContent]);
  for (let i = 0; i < output.length; i++) {
    await createEmbedding(
      "How do we experience life in the perspective of a Bat",
      "Thomas Nagel",
      output[i].pageContent,
      i
    );
     await new Promise((resolve) => setTimeout(resolve, 20000));
  }
};

(async () => {
  await createEmbeddings();
})();
