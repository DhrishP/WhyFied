"use client";
import AddQuestion from "@/actions/add-question";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import React from "react";
import { useSession } from "next-auth/react";

const AddQuestionsPage = () => {
  const [isPending, startTransition] = useTransition();
  const session = useSession();
  const modelArray = [
    { id: "1", name: "General" },
    { id: "2", name: "Marcus" },
    { id: "3", name: "Albert" },
    { id: "4", name: "Seneca" },
    { id: "5", name: "Nietzsche" },
    { id: "6", name: "Epictetus" },
    { id: "7", name: "Ayn" },
    { id: "8", name: "Krishna" },
  ];
  const difficultyArray = [
    { id: "1", name: "easy" },
    { id: "2", name: "medium" },
    { id: "3", name: "hard" },
  ];
  const typeArray = [
    { id: "1", name: "earnest" },
    { id: "2", name: "facetious" },
  ];
  const [selectedModel, setSelectedModel] = React.useState<{
    id: string;
    name: string;
  } | null>({ id: "1", name: "General" });
  const [difficultyModel, setDifficultyModel] = React.useState<{
    id: string;
    name: string;
  } | null>({ id: "1", name: "easy" });
  const [tagValue, setTagValue] = React.useState<string>("");
  const [typeValue, setTypeValue] = React.useState<{
    id: string;
    name: string;
  } | null>({ id: "1", name: "earnest" });
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
    if (!selectedModel) return toast("No model selected");
    if (tagValue.length < 10) return toast("No input value");
    if (!session.data) return toast("No session data");
    if (!difficultyModel) return toast("No difficulty model");
    if (!typeValue) return toast("No type model");
    startTransition(() => {
      AddQuestion(
        selectedModel,
        tagValue,
        difficultyModel.name,
        session.data.user.id ?? "",
        typeValue.name
      ).then((data) => {
        if (data.error) {
          toast("Error in adding question");
        }
        if (data.success) {
          toast("Question added successfully");
        }
      });
    });
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModelId = event.target.value;
    const selectedModel = modelArray.find(
      (model) => model.id === selectedModelId
    );
    setSelectedModel(selectedModel || null);
    console.log(selectedModel);
  };
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedModelId = event.target.value;
    const selectedModel = difficultyArray.find(
      (model) => model.id === selectedModelId
    );
    setDifficultyModel(selectedModel || null);
    console.log(selectedModel);
  };
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModelId = event.target.value;
    const selectedModel = typeArray.find(
      (model) => model.id === selectedModelId
    );
    setTypeValue(selectedModel || null);
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
        <select onChange={handleModelChange}>
          {modelArray.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <select onChange={handleDifficultyChange}>
          {difficultyArray.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <select onChange={handleTypeChange}>
          {typeArray.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={tagValue}
          onChange={handleTagChange}
          className="py-4 w-[70vw] border border-black placeholder:text-start"
          placeholder="enter the question.."
        />

        <Button disabled={isPending} onClick={HandleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default AddQuestionsPage;
