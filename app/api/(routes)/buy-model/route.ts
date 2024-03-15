import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { modelId } = await req.json();
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ status: 401, body: "Unauthorized" });
    }
    const checkIfAlreadyBought = await prisma.userModels.findFirst({
      where: {
        userId: user.id,
        modelId,
      },
    });
    if (checkIfAlreadyBought) {
      return NextResponse.json({ status: 400, body: "Already bought" });
    }
    await prisma.userModels.create({
      data: {
        userId: user.id,
        modelId,
      },
    });
    return NextResponse.json({ status: 200, body: "Bought" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
