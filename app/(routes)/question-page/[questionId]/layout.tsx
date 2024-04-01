import React from "react";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { notFound, redirect } from "next/navigation";

export default async function QuestionPageIdlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return notFound();
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
      notFound();
    }
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
}
