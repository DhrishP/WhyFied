
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextButton,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { LoginButton } from "../auth/login-button";

const Carasoul = () => {
  return (
    <Carousel className="w-screen  h-screen flex items-center justify-center">
      <CarouselContent className="w-full h-full">
      <CarouselItem className="bg-red-300 w-screen h-screen flex flex-col space-y-4 items-center justify-center">
          <h1>hi</h1>
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
