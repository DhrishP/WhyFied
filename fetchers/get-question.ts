"use server"
import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function GetQuestion() {
    const user = await currentUser();
    if (!user) {
        throw new Error("User not found");
    }
    const getDifficulty = await prisma.user.findUnique({
        where: {
            id: user.id
        },
        select: {
            difficulty: true
        }
    })
    if(!getDifficulty) throw new Error("Difficulty not found")
    const res = await prisma.getQuestion.findMany({
        where:{
            difficulty: getDifficulty.difficulty
        }
    })
    const res2 = await prisma.userQuestion.findMany({
        where: {
            userId: user.id
        },
        include:{
            getQuestion:true
        }
    });
    if(!res2) throw new Error("User question not found")
    const userQuestions = res2.map((x) => x.getQuestion)
    const finalRes = res.filter((x) => !userQuestions.includes(x)).slice(0, 3);

    return finalRes;
}