"use client";
import React from "react";
import { $Enums } from "@prisma/client";
import NeoButton from "../ui/neo-brutalist/button";
import { TextGenerateEffect } from "../generate-text";
import { FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

const DisplayQuestion = ({
  questions,
}: {
  questions: {
    id: string;
    question: string;
    difficulty: string;
    modelId: string;
    type: $Enums.Types;
    createdAt: Date;
    updatedAt: Date;
  }[];
}) => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const router = useRouter();

  return (
    <>
      <div className="h-[70vh] flex flex-col items-center justify-center px-6  text-6xl font-bold ">
        <TextGenerateEffect words={questions[questionIndex].question} />
        <button
          onClick={() => {
            if (questionIndex === questions.length - 1) {
              setQuestionIndex(0);
            } else {
              setQuestionIndex(questionIndex + 1);
            }
          }}
          className="flex items-center justify-center mt-4"
        >
          <span className="text-sm text-gray-500">{questionIndex + 1}/3</span>
          <FaQuestionCircle className="h-4 w-4 ml-1 animate-spin" />
        </button>
      </div>

      <div className=" space-y-4 w-full flex flex-col items-center justify-center">
        <NeoButton
          buttonText="Write✍️"
          color="violet"
          onClick={() =>
            router.push(
              `/question-page/${questions[questionIndex].id}?questionId2=${
                questions[(questionIndex + 2) % questions.length].id
              }&&questionId3=${
                questions[(questionIndex + 1) % questions.length].id
              }`
            )
          }
          className="self-center w-5/6"
        />
        <NeoButton
          buttonText="Ponder🤔"
          color="lime"
          className="self-center w-5/6"
        />
      </div>
    </>
  );
};

export default DisplayQuestion;
