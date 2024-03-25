import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { modelId, price } = await req.json();
    const session = await auth();
    if (!session || !modelId || !price) {
      return NextResponse.json({ status: 401, body: "Invalid Data Provided" });
    }
    const user = await prisma.user.findFirst({
      where: {
        id: session.user.id,
      },
    });
    if (!user?.id) {
      return NextResponse.json({ status: 401, body: "Unauthorized" });
    } 
    if (user.coins < price) {
      return NextResponse.json({ status: 400, body: "Not enough coins" });
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
    const res2 = await prisma.userModels.create({
      data: {
        userId: user.id,
        modelId,
      },
    });
    if (!res2) {
      return NextResponse.json({ status: 500, body: "Internal Server Error" });
    }
    const res3 =await prisma.user.update({
      where:{
        id:user.id
      },
      data:{
        coins:user.coins-price
      }
    })
    if(!res3){
      const res4 = await prisma.userModels.delete({
        where:{
          userId_modelId:{
            userId:user.id,
            modelId
          }
        }
      })
      if(!res4){
        return NextResponse.json({ status: 500, body: "Internal Server Error" });
      }
      return NextResponse.json({ status: 500, body: "Internal Server Error" });
    }
    return NextResponse.json({ status: 200, body: "Model Purchased" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, body: "Internal Server Error" });
  }
}
