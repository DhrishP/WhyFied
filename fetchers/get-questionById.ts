
import { prisma } from "@/lib/prisma";

export default async function getQuestionById(questionId: string) {
  const res = await prisma?.getQuestion.findFirst({
    where: {
      id: questionId,
    },
  });

  if (!res) {
    return null;
  }
  return res;
}
