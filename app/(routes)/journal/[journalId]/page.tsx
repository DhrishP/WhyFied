import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GetEntryById from "@/fetchers/get-entry-by-id";

import React from "react";

const JournalIdPage = async ({
  params,
}: {
  params: {
    journalId: string;
  };
}) => {
  const entry = await GetEntryById(params.journalId);
  if (!entry) {
    return <div>Entry not found</div>;
  }
  console.log(entry);

  return (
    <>
      <div className="bg-slate-100 h-full space-y-6 flex flex-col">
        <div className="container prose prose-sm prose-gray mx-auto not-italic text-gray-500  pt-6  md:prose lg:prose-lg dark:prose-invert">
          <h1 className="text-4xl text-black font-bold tracking-tight lg:text-5xl xl:text-6xl/relaxed">
            {entry.getQuestion.question}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Posted on {entry.date}
          </p>
        </div>
        <Carousel className="h-full">
          <CarouselContent className="h-[80vh] bg-slate-100 ">
            <CarouselItem className="text-gray-700 px-10 relative overflow-y-scroll">
              <h1 className="text-4xl mb-7 text-lime-400 font-bold">
                Perspective 1
              </h1>
              {entry.perspective1}
              {entry.perspective2 && (
                <CarouselNext className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 right-2" />
              )}
            </CarouselItem>
            <CarouselItem className="text-gray-700 px-10 relative overflow-y-scroll">
              <h1 className="text-4xl mb-7 text-lime-400 font-bold">
                Perspective 2
              </h1>
              {entry.perspective2}
              <CarouselPrevious className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 left-5 text-gray-700" />
              {entry.perspective3 && (
                <CarouselNext className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 right-2" />
              )}
            </CarouselItem>
            {entry.perspective3 && (
              <CarouselItem className="text-gray-700 px-10 overflow-y-scroll">
                <h1 className="text-4xl mb-7 text-lime-400 font-bold">
                  Perspective 3
                </h1>
                {entry.perspective3}
                <CarouselPrevious className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 left-5 text-gray-700" />
                {entry.perspective4 && (
                  <CarouselNext className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 right-2" />
                )}
              </CarouselItem>
            )}
            {entry.perspective4 && (
              <CarouselItem className="text-gray-700 px-10  overflow-y-scroll">
                <h1 className="text-4xl mb-7 text-lime-400 font-bold">
                  Perspective 4
                </h1>
                {entry.perspective4}
                <CarouselPrevious className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 left-5 text-gray-700" />
                {entry.perspective5 && (
                  <CarouselNext className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 right-2" />
                )}
              </CarouselItem>
            )}
            {entry.perspective5 && (
              <CarouselItem className="text-gray-700 px-10 overflow-y-scroll">
                <h1 className="text-4xl mb-7 text-lime-400 font-bold">
                  Perspective 5
                </h1>
                {entry.perspective5}
                <CarouselPrevious className="absolute top-[30vh] bg-lime-300 hover:bg-lime-400 left-5 text-gray-700" />
              </CarouselItem>
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default JournalIdPage;
