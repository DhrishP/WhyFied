"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const AddQuestionsPage = () => {
  const modelArray = [
    { id: "1", name: "Krishna" },
    { id: "2", name: "Marcus" },
    { id: "3", name: "Albert" },
    { id: "4", name: "Seneca" },
    { id: "5", name: "Nietzsche" },
    { id: "6", name: "Epictetus" },
    { id: "7", name: "Ayn" },
  ];
  const [selectedModel, setSelectedModel] = React.useState<{
    id: string;
    name: string;
  } | null>({ id: "1", name: "Krishna" });
  const [tagValue, setTagValue] = React.useState<string>("");
  // const [prompt, setPrompt] = React.useState<string>("");
  // const promptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPrompt(event.target.value);
  // };
  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value);
  };
  const HandleSubmit = () => {
    console.log("selectedModel", selectedModel);
    console.log("tagValue", tagValue);
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModelId = event.target.value;
    const selectedModel = modelArray.find(
      (model) => model.id === selectedModelId
    );
    setSelectedModel(selectedModel || null);
    console.log(selectedModel);
  };
  if (!modelArray) return <div>Loading...</div>;

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen space-y-8 font-semibold">
        {/* <div>
          <input placeholder="Add a prompt" type="text" value={prompt} onChange={promptChange} />
          <Button onClick={HandleSubmit}>Get Question</Button>
        </div>
        <div></div> */}
        <select onChange={handleModelChange}></select>
        <input
          type="text"
          value={tagValue}
          onChange={handleTagChange}
          className="py-4"
          placeholder="enter the question"
        />
        <Button onClick={HandleSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default AddQuestionsPage;
