
import {auth} from '@/auth'
import { prisma } from "@/lib/prisma";
import { $Enums } from '@prisma/client';

export default async function GetQuestion(difficulty:$Enums.Difficulty, type:$Enums.Types) {
  const session = await auth()
  if (!session) {
    return null
  }
  const res = await prisma.getQuestion.findMany({
    where: {
      difficulty,
      type
    },
    orderBy:{
      updatedAt: 'asc'
    }
  });
  return res.slice(0,3)
}
