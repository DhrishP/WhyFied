import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user?.id) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const isAlreadyAnswered = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
      isAnswered: true,
    },
  });
  if (isAlreadyAnswered) {
   return NextResponse.json({ message: "Already made" }, { status: 400 });
  }
  const res = await prisma.savequestionTimeStamps.update({
    where: {
      userId_timestamp: {
        userId: user.id,
        timestamp: new Date().toLocaleDateString(),
      },
    },
    data: {
      isAnswered: true,
    },
  });
  return NextResponse.json(res, { status: 200 });
}
