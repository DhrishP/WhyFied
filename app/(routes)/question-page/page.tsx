import GetQuestion from "@/fetchers/get-question";
import React from "react";
import DisplayQuestion from "@/components/question-page/display-question";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

const QestionPage = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/login");
  }
  const IsAlreadyAns = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
      isAnswered: true,
    },
  });
  if (IsAlreadyAns) {
    return (
      <div className="animate-pulse text-6xl font-extrabold text-center h-screen">
        Come back tomorrow to get more questions , till then keep thinking !
      </div>
    );
  }
  const getQuestion = await GetQuestion();
  return (
    <>
      <DisplayQuestion questions={getQuestion} />
    </>
  );
};

export default QestionPage;
