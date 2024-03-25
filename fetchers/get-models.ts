"use server";
import { currentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function GetModels() {
  const user = await currentUser();
  let response = await prisma.model.findMany();
  if (!response) {
    return [];
  }
  const res = await prisma.userModels.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      model: true,
    },
  });
  response = response.filter((x) => !res.map((x) => x.modelId).includes(x.id));
  return response;
}
