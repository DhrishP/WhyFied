import GetQuestion from "@/fetchers/get-question";
import React from "react";
import DisplayQuestion from "@/components/question-page/display-question";
import { prisma } from "@/lib/prisma";
import DisplayQuestionAns from "@/components/question-page/display-questionAns";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";

const QuestionPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  const user = session.user;

  const IsAlreadyAns = await prisma.savequestionTimeStamps.findFirst({
    where: {
      timestamp: new Date().toLocaleDateString(),
      isAnswered: true,
    },
  });
  if (IsAlreadyAns) {
    return <DisplayQuestionAns />;
  }
  const getDifficulty = await prisma.preferences.findFirst({
    where: {
      userId: user.id,
    },
    select: {
      difficulty: true,
      type: true,
    },
  });
  if (!getDifficulty) {
    return notFound();
  }
  const getQuestion = await GetQuestion(
    getDifficulty.difficulty,
    getDifficulty.type
  );
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
