"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextButton,
} from "@/components/ui/carousel";
import SimpleNeoCard from "../ui/neo-brutalist/simple-neo-card";
import NeoButton from "../ui/neo-brutalist/button";
import axios from "axios";
import { toast } from "sonner";

const OptionsCaraosel = () => {
  const [isActive, setIsActive] = React.useState({
    beginner: false,
    intermediate: false,
    hardcore: false,
  });
  const [isTypeActive, setIsTypeActive] = React.useState({
    earnest: false,
    facetious: false,
  });
  const DifficultyArray = [
    {
      id: 1,
      title: "Beginner",
      description: "You are new to philosophy and self reflecting",
      onClick: () => {
        onClick("beginner");
      },
    },
    {
      id: 2,
      title: "Intermediate",
      description:
        "You have some knowledge about philosophy and self reflecting",
      onClick: () => {
        onClick("intermediate");
      },
    },
    {
      id: 3,
      title: "Hardcore",
      description: "You are a philosopher and self reflecting",
      onClick: () => {
        onClick("hardcore");
      },
    },
  ];
  const TypeArray = [
    {
      id: 1,
      title: "Earnest",
      description: "you would like to have deep , more philosophical questions",
      onClick: () => {
        onClickType("earnest");
      },
    },
    {
      id: 2,
      title: "Facetious",
      description:
        "you would like to have light , more non-serious , sometimes unphilosophical questions",
      onClick: () => {
        onClickType("facetious");
      },
    },
  ];

  const onClick = (type: string) => {
    setIsActive({
      beginner: false,
      intermediate: false,
      hardcore: false,
      [type]: true,
    });
  };
  const onClickType = (type: string) => {
    setIsTypeActive({
      earnest: false,
      facetious: false,
      [type]: true,
    });
  };
  const onSubmit = async () => {
    const getDifficulty = Object.keys(isActive).find(
      (key) => isActive[key as keyof typeof isActive]
    );
    const getType = Object.keys(isTypeActive).find(
      (key) => isTypeActive[key as keyof typeof isTypeActive]
    );
    if (!getDifficulty || !getType)
      return alert("Please select a difficulty and type");
    const response = await axios.post("/api/add-preferences", {
      type: getType,
      difficulty: getDifficulty,
    });
    if (response.status === 200) {
      toast(response.data);
    } else {
      toast(response.data);
    }
  };
  return (
    <Carousel className="w-screen  h-screen flex items-center justify-center">
      <CarouselContent className="w-full h-full">
        <CarouselItem className="bg-lime-100 w-screen h-screen flex flex-col space-y-4 items-center justify-center">
          {DifficultyArray.map((item) => (
            <SimpleNeoCard
              key={item.id}
              isActive={
                isActive[item.title.toLowerCase() as keyof typeof isActive]
              }
              title={item.title}
              className="cursor-pointer w-3/4 h-32"
              description={item.description}
              onClick={item.onClick}
            />
          ))}
          <div className="space-x-2 flex">
            <div className={`bg-white rounded-full w-4 h-3`}></div>
            <div className={`bg-black rounded-full w-3 h-3`}></div>
          </div>
          <CarouselNextButton buttonText="Next" />
        </CarouselItem>
        <CarouselItem className="bg-lime-100 w-screen h-screen flex flex-col space-y-4 items-center justify-center">
          {TypeArray.map((item) => (
            <SimpleNeoCard
              key={item.id}
              isActive={
                isTypeActive[
                  item.title.toLowerCase() as keyof typeof isTypeActive
                ]
              }
              title={item.title}
              className="cursor-pointer w-3/4 h-32"
              description={item.description}
              onClick={item.onClick}
            />
          ))}
          <div className="space-x-2 flex">
            <div className={`bg-white rounded-full w-4 h-3`}></div>
            <div className={`bg-black rounded-full w-3 h-3`}></div>
          </div>
          <NeoButton
            onClick={onSubmit}
            color="lime"
            rounded="md"
            buttonText="Let's Start Thinking"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default OptionsCaraosel;
