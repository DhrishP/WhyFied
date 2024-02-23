import React from "react";
import { Lexend_Mega } from "next/font/google";
const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });

export default function Card({ color, text1, text2, text3 }) {
  return (
    <>
      <div
        className={`${Mega.className} aspect-square font-medium w-[320px] text-2xl ${color} border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center`}
      >
        <div className="flex space-x-2 mx-auto w-[255px]">
          <p>
            {text1} <br />
            <strong className="text-yellow-500">{text2}</strong> {text3}
          </p>
        </div>
      </div>
    </>
  );
}
