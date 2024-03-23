import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  const IsAlreadyAns = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
      isAnswered:true
    },
  });
  if (IsAlreadyAns) {
    return NextResponse.json({ message: "Already answered" }, { status: 400});
  }
  return NextResponse.json({ message: "Not answered" }, { status: 200 });
}