"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function getPromptPermission() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return false;
  }
  const res = await prisma?.user.findFirst({
    where: {
      id: user.id,
    },
  });
  if (!res) {
    return false;
  }
  if (res?.promptTokes > 0) {
    return true;
  } else {
    return false;
  }
}
