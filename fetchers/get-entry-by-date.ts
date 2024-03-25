"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export default async function GetEntryByDate(date: string) {
  const session = await auth();
  if (!session) {
    return null;
  }
  const user = session.user;
  if (!user) {
    return null;
  }
  const res = await prisma?.journalEntries.findFirst({
    where: {
      userId: user.id,
      date,
    },
  });
  return res;
}
