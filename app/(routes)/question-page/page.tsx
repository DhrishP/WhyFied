import GetQuestion from "@/fetchers/get-question";
import React from "react";
import DisplayQuestion from "@/components/question-page/display-question";

const QestionPage = async () => {
  const checkTimeStampAns = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/question-page/check-timestamp-answered`,
    { method: "POST" }
  );
  if (checkTimeStampAns.status === 400) {
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
