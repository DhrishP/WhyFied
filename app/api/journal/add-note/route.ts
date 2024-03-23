import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const { note, questionId } = await req.json();
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ status: 401, body: "Unauthorized" });
  }
  const user = await prisma.user.findFirst({
    where: {
      id: session.user.id,
    },
  });
  if (!user) {
    return NextResponse.json({ status: 401, body: "Unauthorized" });
  }
  if (!note) {
    return NextResponse.json({ status: 400, body: "Bad Request" });
  }
  const res = await prisma.journalEntries.create({
    data: {
      userId: user.id,
      answer: note,
      getQuestionId: questionId,
      date: new Date(),
    },
  });
  if (res) {
    const res2 = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        Streak: user.Streak + 1,
        coins: user.coins + 500,
      },
    });
    if (!res2) {
      return NextResponse.json({ status: 500, body: "ternal Server Error" });
    }
    const res3 =await prisma.savequestionTimeStamps.update({
      where:{
        userId_timestamp:{
          userId:user.id,
          timestamp:new Date().toLocaleDateString()
        
        }
      },
      data:{
        isAnswered:true
      }
    })
    if(!res3){
      return NextResponse.json({ status: 500, body: "ternal Server Error" });
    }
    const res4 = await prisma.userQuestion.create({
      data:{
        questionId,
        userId:user.id
      }
    })
    if(!res4){
      return NextResponse.json({ status: 500, body: "ternal Server Error" });
    }
    return NextResponse.json({ status: 200, body: "Answer Submitted" });
  }

  return NextResponse.json({ status: 500, body: "Internal Server Error" });
}
