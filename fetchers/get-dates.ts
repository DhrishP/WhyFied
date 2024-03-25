"use server"
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function GetDates() {
  const session = await auth();
  if (!session) {
    return null;
  }
  const user = session.user;
  if (!user) {
    return null;
  }
  const res = await prisma.savequestionTimeStamps.findMany({
    where: {
      userId: user.id,
      isAnswered:true
    },
  });
  return res
}
