import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  const { type, difficulty } = await req.json();
  if (!type || !difficulty) {
    return NextResponse.json({ error: "Invalid request" });
  }
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" });
  }

  const res = await prisma.preferences.update({
    where: {
      userId: user.id,
    },
    data: {
      difficulty,
      type,
    },
  });
  const tp = await prisma.user.findFirst({
    where:{
        id: user.id
    },
    include:{
        Preferences:true
    }
  })
  if (res) {
    return NextResponse.json({ success: "Preferences updated" },{status: 200});
  }
}
