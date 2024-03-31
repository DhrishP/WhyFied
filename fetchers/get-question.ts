
import {auth} from '@/auth'
import { prisma } from "@/lib/prisma";

export default async function GetQuestion() {
  const session = await auth()
  if (!session) {
    return null
  }
  const user = session.user
  if (!user) {
    return null
  }
  const getDifficulty = await prisma.preferences.findFirst({
    where: {
      userId: user.id,
    },
    select: {
      difficulty: true,
      type: true,
    },
  });
  if (!getDifficulty?.difficulty || !getDifficulty?.type) throw new Error("Difficulty not found");
  const res = await prisma.getQuestion.findMany({
    where: {
      difficulty: getDifficulty.difficulty,
      type: getDifficulty.type,
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
