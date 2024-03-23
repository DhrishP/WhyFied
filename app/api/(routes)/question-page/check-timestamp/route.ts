import { prisma } from "@/lib/prisma";
import { currentUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  const IsAlreadyMade = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
    },
  });
  if (IsAlreadyMade) {
    NextResponse.json({ message: "Already made" }, { status: 200 });
  }
  const res = await prisma.savequestionTimeStamps.create({
    data: {
      userId: user.id,
      timestamp: new Date().toLocaleDateString(),
    },
  });
  return NextResponse.json(res, { status: 200 });
}
