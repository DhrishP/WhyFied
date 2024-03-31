
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function GetRecentEntries() {
  const session = await auth();
  if (!session) {
    return null;
  }
  const user = session.user;
  if (!user) {
    return null;
  }
  const res = await prisma.journalEntries.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      date: "desc",
    },
    include: {
      getQuestion: {
        select: {
          question: true,
          id: true,
        },
      },
    },
    take: 5,
  });
  if (!res) {
    return null;
  }
  return res;
}
