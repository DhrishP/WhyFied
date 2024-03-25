import GetQuestion from "@/fetchers/get-question";
import React from "react";
import DisplayQuestion from "@/components/question-page/display-question";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DisplayQuestionAns from "@/components/question-page/display-questionAns";

const QuestionPage = async () => {
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
    return <DisplayQuestionAns/>
  }
  const getQuestion = await GetQuestion();
  if (!getQuestion) {
    return (

      <div className="animate-pulse text-6xl font-extrabold text-center h-screen">
        Something went wrong , please try again later
      </div>
    );
  }
  return (
    <>
      <DisplayQuestion questions={getQuestion} />
    </>
  );
};

export default QuestionPage;
