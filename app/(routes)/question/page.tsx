import GetQuestion from "@/fetchers/get-question";
import React from "react";
import DisplayQuestion from "@/components/question-page/display-question";

const QestionPage = async() => {
    const getQuestion = await GetQuestion()
    console.log(getQuestion)
  return(
    <>
        <DisplayQuestion questions={getQuestion}/>
    </>
  );
};

export default QestionPage;
