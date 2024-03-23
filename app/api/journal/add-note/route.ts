import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { useCurrentUserInfo } from "@/hooks/use-current-user-info";

export async function POST(req: Request) {
  const { note, questionId } = await req.json();
  const user = await useCurrentUserInfo();
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
      questionId,
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
    if (res2) {
      return NextResponse.json({ status: 200, body: "Note added" });
    }
  }

  return NextResponse.json({ status: 500, body: "Internal Server Error" });
}
