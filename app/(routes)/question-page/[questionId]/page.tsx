"use client";
import React, { useState } from "react";
import getQuestionById from "@/fetchers/get-questionById";
import NeoButton from "@/components/ui/neo-brutalist/button";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
type Question = {
  id: string;
  question: string;
  difficulty: string;
  modelId: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};

const QuestionIdPage = ({ params }: { params: { questionId: string } }) => {
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [perspectives, setPerspectives] = useState(["", ""]);
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const questionId2 = searchParams.get("questionId2");
  const questionId3 = searchParams.get("questionId3");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const fetchQuestion = async () => {
      const fetchedQuestion = await getQuestionById(params.questionId);
      if (!fetchedQuestion) {
        return;
      }
      setQuestion(fetchedQuestion);
    };
    setOpen(false);
    fetchQuestion();
  }, [params.questionId]);

  const handlePerspectiveChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newPerspectives = [...perspectives];
    newPerspectives[index] = event.target.value;
    setPerspectives(newPerspectives);
  };

  const handleAddPerspective = () => {
    if (perspectives[perspectives.length - 1] === "")
      return toast.error(
        "Please fill the current perspective before adding a new one"
      );
    if (perspectives[perspectives.length - 1].length < 15)
      return toast.error("Please try to add thought to the perspective");
    setPerspectives([...perspectives, ""]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    toast("Submitting your answer");
    const res = await fetch("/api/journal/add-note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionId: params.questionId,
        perspective1: perspectives[0],
        perspective2: perspectives[1],
        perspective3: perspectives[2],
        perspective4: perspectives[3],
        perspective5: perspectives[4],
        questionArray: [params.questionId, questionId2, questionId3],
      }),
    });
    if (res.status !== 200) {
      toast.error("Something went wrong");
      setLoading(false);
    }
    if (res.status === 200) {
      toast.success("Answer Submitted");
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          router.push("/question-page");
          setOpen(false);
        }}
      >
        <DialogContent className="w-[90vw]">
          <DialogHeader>
            <h3 className="text-center font-bold text-3xl ">🎊</h3>
            <DialogTitle>Answer Submitted</DialogTitle>
            <DialogDescription>
              Thanks for submitting your answer
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-2">
            <h4>Rewards:</h4>
            <h1 className="font-bold text-xl">+500 coins🪙</h1>
            <h1 className="font-bold text-xl">+1 streak🔥</h1>
            <h1 className="font-bold text-xl">+3 prompt tokense⚡</h1>
          </div>
        </DialogContent>
      </Dialog>
      <div className="overflow-x-hidden">
        <div className=" py-2 mb-10 px-1 animate-pulse bg-violet-200 border-b-2 border-black">
          <h1 className="text-2xl font-bold  ">Q.{question?.question}</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-4">
          {perspectives.map((perspective, index) => (
            <div key={index} className="flex flex-col">
              <label className="mb-2 bg-violet-300">
                Perspective {index + 1}
              </label>
              <textarea
                value={perspective}
                onChange={(event) => handlePerspectiveChange(index, event)}
                className="p-2 border rounded-md font-semibold"
              />
            </div>
          ))}
          {perspectives.length < 5 && (
            <div className="flex flex-col items-center justify-center space-y-4 w-full">
              <NeoButton
                onClick={handleAddPerspective}
                buttonText="+Add perspective"
                type="button"
                color="lime"
                className=" font-semibold self-center text-center  "
              />
            </div>
          )}
          <div className="flex items-center  justify-center w-full ">
            <NeoButton
              disabled={loading}
              buttonText="Submit"
              type="submit"
              color="violet"
              className="  text-center font- text-lg w-3/4 "
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionIdPage;
