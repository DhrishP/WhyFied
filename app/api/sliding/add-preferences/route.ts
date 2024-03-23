
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
  if (res) {
    return NextResponse.json({ status: 200, body: "Preferences added" });
  }
  return NextResponse.json({ status: 500, body: "Internal Server Error" });
}
