
import {auth} from '@/auth'
import { prisma } from "@/lib/prisma";
import { $Enums } from '@prisma/client';

export default async function GetQuestion(difficulty:$Enums.Difficulty, type:$Enums.Types) {
  const session = await auth()
  if (!session) {
    return null
  }
  const user = session.user
  const res = await prisma.getQuestion.findMany({
    where: {
      difficulty,
      type
    },
    orderBy:{
      updatedAt: 'asc'
    }
  });
  const res2 = await prisma.userQuestion.findMany({
    where: {
      userId: user.id,
    },
    include: {
      getQuestion: true,
    },
  });
  if(res2.length === 0) return res.slice(0, 3);
  const userQuestions = res2.map((x) => x.getQuestion);
  const finalRes = res.filter((x) => !userQuestions.includes(x)).slice(0, 3);

  return finalRes;
}
