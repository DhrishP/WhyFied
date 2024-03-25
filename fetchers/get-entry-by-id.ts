import {auth} from '@/auth'
import {prisma} from '@/lib/prisma'

export default async function GetEntryById(journalId: string) {
  const session = await auth();
  if (!session) {
    return null;
  }
  const user = session.user;
  if (!user) {
    return null;
  }
  const res = await prisma.journalEntries.findUnique({
    where: {
      id: journalId,
    },
    include: {
      getQuestion: {
        select: {
          question: true,
          id: true,
          difficulty: true,
          createdAt: true,
        },
      },
    },
  });
    if (!res) {
        return null;
    }
    return res;
}
