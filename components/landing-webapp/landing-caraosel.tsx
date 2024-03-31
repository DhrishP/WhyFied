import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextButton,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { LoginButton } from "../auth/login-button";
import FirstBgComp from "../backgroundComponents/first";
import NeoButton from "../ui/neo-brutalist/button";

const Carasoul = () => {
  return (
    <Carousel className="w-screen  h-screen flex items-center justify-center">
      <CarouselContent className="w-full h-full">
        <CarouselItem className=" w-screen bg-slate-50  relative h-screen flex flex-col space-y-4 items-center justify-center">
          <Image
            className=""
            src={"/images/snowball.jpg"}
            alt={""}
            width={300}
            height={280}
          />
          <div className="absolute w-screen items-center  bottom-10  flex flex-col space-y-10">
            <h2
              style={{ wordBreak: "break-word" }}
              className="font-bold mx-10 "
            >
              Get Started with your snowball effect by asking yourself one
              question per day{" "}
            </h2>
            <div className="space-x-2  flex">
              <div className={`bg-pink-300 rounded-full w-4 h-3`}></div>
              <div className={`bg-black rounded-full w-3 h-3`}></div>
              <div className={`bg-black rounded-full w-3 h-3`}></div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className=" w-screen bg-slate-50 relative h-screen flex flex-col space-y-4 items-center justify-center">
         
          <Image
            className=""
            src={"/images/nei.jpg"}
            alt={""}
            width={300}
            height={300}
          />
          <div className="absolute w-screen items-center  bottom-10 flex flex-col space-y-10">
            <h2 className="font-bold mx-10 ">"He who has a WHY can bear anyhow" - nietzche</h2>
            <div className="space-x-2  flex">
              <div className={`bg-black rounded-full w-3 h-3`}></div>
              <div className={`bg-pink-300 rounded-full w-4 h-3`}></div>
              <div className={`bg-black rounded-full w-3 h-3`}></div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="flex-col bg-slate- relative space-y-4 w-screen h-screen flex items-center justify-center">
       
          <Image
            className=""
            src={"/images/qlogo.jpg"}
            alt={""}
            width={300}
            height={300}
          />
          <div className="absolute w-screen items-center  bottom-10 flex flex-col space-y-10">
            <LoginButton mode="modal" asChild>
              <NeoButton
                buttonText="Get Started Thinking!!"
                className="w-5/6"
                color="pink"
              />
            </LoginButton>
            <div className="space-x-2  flex">
              <div className={`bg-black rounded-full w-3 h-3`}></div>
              <div className={`bg-black rounded-full w-3 h-3`}></div>
              <div className={`bg-pink-300 rounded-full w-4 h-3`}></div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Carasoul;
