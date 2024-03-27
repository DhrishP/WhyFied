"use client";
import React from "react";
import { $Enums } from "@prisma/client";
import NeoButton from "../ui/neo-brutalist/button";
import { TextGenerateEffect } from "../generate-text";
import { FaQuestionCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import HamburgerDrawer from "../hamburger-drawer";
import Image from "next/image";

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
      <Image
        src={"/images/meta.svg"}
        className="-z-10 left-10 top-40 absolute opacity-50"
        alt={""}
        width={80}
        height={80}
      />
      <Image
        src={"/images/meta2.svg"}
        className="-z-10 right-10 top-20 rotate-180 absolute opacity-50"
        alt={""}
        width={80}
        height={80}
      />
      <Image
        src={"/images/meta2.svg"}
        className="-z-10 top-[40vh] right-10 absolute opacity-50"
        alt={""}
        width={90}
        height={90}
      />
      <Image
        src={"/images/meta3.svg"}
        className="-z-10 top-[65vh] left-32 rotate-180 opacity-50 absolute"
        alt={""}
        width={100}
        height={100}
      />
      <Image
        src={"/images/meta4.svg"}
        className="-z-10 bottom-10  opacity-40 fixed "
        alt={""}
        width={100}
        height={100}
      />

      <nav className="flex items-center justify-between px-10 pt-6">
        <div>
          <h2 className=" text-2xl">WHYFIED V1</h2>
        </div>
        <div>
          <HamburgerDrawer />
        </div>
      </nav>
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
          color="lime"
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
        {/* <NeoButton
          buttonText="Ponder🤔"
          color="lime"
          className="self-center w-5/6"
        /> */}
      </div>
    </>
  );
};

export default DisplayQuestion;
