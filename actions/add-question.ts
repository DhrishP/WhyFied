"use server";
import { prisma } from "@/lib/prisma";

export default async function AddQuestion(
  selectedModel: { id: string; name: string },
  tagValue: string,
  difficulty: string,
  userId: string,
  type: string
) {
  const res = await prisma?.getQuestion.create({
    data: {
      difficulty,
      modelId: selectedModel.id,
      question: tagValue,
      type: type === "earnest" ? "earnest" : "facetious",
    },
  });
  if (!res) return { error: "Error in adding question" };
  return { success: "Question added successfully" };
}
