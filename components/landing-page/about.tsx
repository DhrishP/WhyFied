import React from "react";
import { Lexend_Mega } from "next/font/google";
import Card from "../compo/Card";
const Mega = Lexend_Mega({ subsets: ["latin"], weight: ["500"] });

function About() {
  return (
    <>
      <div className="h-screen bg-orange-100">
        <div className="flex flex-col px-5 text-center w-full justify-center">
          <div className="self-center text-4xl font-bold text-black mt-[2vw]">
            <span className="text-yellow-500">WHY CHOOSE THINKING</span> <br />
            IN TODAY&apos;S WORLD?
          </div>

          <div className="mt-16 w-full text-3xl font-semibold text-neutral-700 max-md:mt-10 max-md:max-w-full relative bottom-6 z-30">
            Don&apos;t just accept things as they are, ask why and gain a deeper
            understanding of <br /> yourself and the world around you.
          </div>
        </div>

        <div className="sm:flex sm:justify-evenly items-center h-[60vh] sm:mx-12">
          <Card
            color={"bg-[#f0d5f4]"}
            text1={"Social media is overwhelming?"}
            text2={"Rediscover"}
            text3={"your own unique voice."}
            className="z-30 relative left-[10vh]"
          />

          <Card
            color={"bg-[#f2f491]"}
            text1={"Emotionally disconnected? "}
            text2={"Find"}
            text3={"meaning in your complexity."}
            className="z-50"
          />

          <div className="h-[520px] w-[500px] bg-[radial-gradient(ellipse_at_center,_#F4d254_45%,#ffedd5_85%)] absolute z-20"></div>

          <Card
            color={"bg-[#d2ede8]"}
            text1={"Feeling a virtual void? "}
            text2={"Anchor "}
            text3={" your purpose within."}
            className="z-20 relative right-[10vh]"
          />
        </div>

        <div className="text-2xl font-bold text-center text-black w-full relative top-5 z-20">
          SPOILER : IT ALL STARTS BY ASKING WHYs’
        </div>
      </div>
    </>
  );
}

export default About;
