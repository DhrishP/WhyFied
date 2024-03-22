"use server";
import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function GetModels() {
  const user = await currentUser();
  const res = await prisma.userModels.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      model: true,
    },
  });
  return res.map((x) => x.model);
}
