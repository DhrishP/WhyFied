
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ status: 401, body: "Unauthorized" });
  }
  const user = session.user;
  const { difficulty, type } = await req.json();
  if (!user.id) {
    return NextResponse.json({ status: 401, body: "Unauthorized" });
  }
  if (!difficulty || !type) {
    return NextResponse.json({ status: 400, body: "Bad Request" });
  }
  const res = await prisma.preferences.create({
    data: {
      userId: user.id,
      type,
      difficulty,
    },
  });
  if (!res) {
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
  const res2 = await prisma.userModels.create({
    data:{
      modelId: '1',
      userId: user.id,
    }
  })
  if (!res2) {
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
  return NextResponse.json({ status: 200, body: "Preferences added" });
}
