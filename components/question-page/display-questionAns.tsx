import React from "react";
import NeoButton from "../ui/neo-brutalist/button";
import Link from "next/link";

const DisplayQuestionAns = () => {
  return (
    <div className=" text-center h-screen flex items-center justify-center flex-col space-y-8">
      <h3 className="text-5xl font-semibold px-2 text-gray-700 animate-pulse ">
        {" "}
        Come back tomorrow to get more questions , till then keep thinking !
      </h3>
      <div className="h-1/3 relative flex flex-col w-full space-y-4 bottom-0">
        <Link href="/shop">
          <NeoButton className="w-5/6" buttonText="Shop🛒" color="gray" />
        </Link>
        <Link href="/chatbot">
          <NeoButton
            className="w-5/6"
            buttonText="Talk to Models🤖"
            color="black"
          />
        </Link>
        <Link href={"/journal"}>
          <NeoButton className="w-5/6" buttonText="Journal📓" color="yellow" />
        </Link>
      </div>
    </div>
  );
};

export default DisplayQuestionAns;
