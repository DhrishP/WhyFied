import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";

export const useCurrentUserInfo = async () => {
  const session = useSession();
  const res = await prisma.user.findFirst({
    where: {
      id: session.data?.user?.id,
    },
  });
  return res;
};
