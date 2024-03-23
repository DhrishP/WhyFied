"use client";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const DisplayQuestion = ({
  questions,
}: {
  questions: {
    id: string;
    question: string;
    difficulty: string;
    modelId: string;
  }[];
}) => {
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [answer, setAnswer] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const onSubmit = async () => {
    if (answer.length < 15) {
      toast("Answer should be atleast 15 characters long");
      return;
    }
    const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/journal/add-note`, {
      note: answer,
      questionId: questions[questionIndex].id,
    });
    if (res.status === 200) {
      toast("Answer Submitted");
      setOpen(true);
    }
  };
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Answer Submitted</DialogTitle>
            <DialogDescription>
              Here&apos;s your reward for thinking today !
            </DialogDescription>
          </DialogHeader>
          <div>tp</div>
        </DialogContent>
      </Dialog>
      <Card className="mt-10 font-bold flex items-center justify-center mx-auto  h-40 w-3/4 ">
        <CardContent>
          <CardTitle>Todays Question</CardTitle>
          <div>{questions[questionIndex].question}</div>
        </CardContent>
      </Card>
      <Button
        className="mx-auto "
        onClick={() => {
          if (questionIndex === questions.length - 1) {
            setQuestionIndex(0);
          } else {
            setQuestionIndex(questionIndex + 1);
          }
        }}
      >
        Next Question
      </Button>
      <div className="mt-40 w-full flex flex-col items-center justify-center">
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={6}
          cols={50}
          placeholder="Enter your answer"
          className="border-2 border-black "
        />
        <Button onClick={onSubmit} className="mt-5">
          Submit
        </Button>
      </div>
    </>
  );
};

export default DisplayQuestion;
