"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextButton,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { LoginButton } from "../auth/login-button";
import SimpleNeoCard from "../ui/neo-brutalist/simple-neo-card";

const Carasoul = () => {
  const [isActive, setIsActive] = React.useState({
    beginner: false,
    intermediate: false,
    hardcore: false,
  });

  const onClick = (type:string) => {
    setIsActive({
      beginner: false,
      intermediate: false,
      hardcore: false,
      [type]: true,
    });

  };
  return (
    <Carousel className="w-screen  h-screen flex items-center justify-center">
      <CarouselContent className="w-full h-full">
      <CarouselItem className="bg-red-300 w-screen h-screen flex flex-col space-y-4 items-center justify-center">
          <h1>hi</h1>
          <SimpleNeoCard
            isActive={isActive.beginner}
            title="Beginner"
            className="cursor-pointer w-3/4 h-32"
            description="You are new to philosophy and self reflecting"
            onClick={()=>{onClick('beginner')}}
          />
          <SimpleNeoCard
            isActive={isActive.intermediate}
            title="Intermediate"
            className="cursor-pointer w-3/4 h-32"
            description="You have some knowledge about philosophy and self reflecting"
            onClick={()=>{onClick('intermediate')}}
          />
          <SimpleNeoCard
            isActive={isActive.hardcore}
            title="Hardcore"
            className="cursor-pointer w-3/4 h-32"
            description="You are a philosopher and self reflecting"
            onClick={()=>{onClick('hardcore')}}
          />
          <div className="space-x-2 flex">
            <div className={`bg-black rounded-full w-3 h-3`}></div>
            <div className={`bg-white rounded-full w-4 h-3`}></div>
            <div className={`bg-black rounded-full w-3 h-3`}></div>
          </div>
        </CarouselItem>
        <CarouselItem className="bg-red-300 w-screen h-screen flex flex-col space-y-4 items-center justify-center">
          <h1>hi</h1>
          <div className="space-x-2 flex">
            <div className={`bg-white rounded-full w-4 h-3`}></div>
            <div className={`bg-black rounded-full w-3 h-3`}></div>
            <div className={`bg-black rounded-full w-3 h-3`}></div>
          </div>
          <CarouselNextButton   buttonText="Next" />
        </CarouselItem>
        <CarouselItem className="bg-red-300 flex-col space-y-4 w-screen h-screen flex items-center justify-center">
          <h1>hi</h1>
          <LoginButton mode="modal" asChild>
            <Button className="" size={"lg"} variant={"secondary"}>
              Log In
            </Button>
          </LoginButton>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Carasoul;
