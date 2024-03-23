import React from "react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export default async function QuestionPagelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    throw new Error("Session not found");
  }
  const IsAlreadyMade = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
    },
  });
  if (!IsAlreadyMade) {
    const res = await prisma.savequestionTimeStamps.create({
      data: {
        userId: session.user.id ? session.user.id : "",
        timestamp: new Date().toLocaleDateString(),
      },
    });
    if (!res) {
      return <p>Loading...</p>;
    }
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
}
