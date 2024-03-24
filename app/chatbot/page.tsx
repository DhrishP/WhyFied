"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
import getUserModels from "@/fetchers/get-user-models";
import { $Enums } from "@prisma/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import styles from "@/components/chatbot/answer.module.css";

type UserModels = {
  id: string;
  name: $Enums.ModelName;
  description: string;
  searchPrompt: string | null;
  price: number;
  ImageUrl: string;
  HeadImageUrl: string | null;
};
const FormSchema = z.object({
  modelname: z.string(),
  prompt: z.string(),
});

export default function Component() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [selectedModel, setSelectedModel] = useState<UserModels[]>([]);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<{ sender: string; text: string }[]>(
    []
  );
  const getModels = async () => {
    const fetchModels: UserModels[] | null = await getUserModels();
    if (!fetchModels) {
      return toast("No models found");
    }
    if (!fetchModels) {
      return toast("No models found");
    }
    setSelectedModel(fetchModels);
  };
  useEffect(() => {
    getModels();
    setLoading(false);
  }, []);
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (data.modelname === "" || data.prompt === "") {
      setLoading(false);
      return toast("Please fill all fields properly");
    }
    if (data.prompt.length < 10) {
      setLoading(false);
      return toast("Please provide a longer prompt");
    }
    setResponse((prev) => [...prev, { sender: "user", text: data.prompt }]);
    setLoading(true);
    const getModel = selectedModel.find(
      (model) => model.name === data.modelname
    );
    console.log("getModel", getModel);
    const res = await fetch("/api/chatbot/answer-fetch", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.prompt,
        description: getModel?.description,
        searchPromptModel: getModel?.searchPrompt,
      }),
    });
    if (!res.ok) {
      setLoading(false);
      return toast("An error occured, please try again later");
    }
    const AnsData = res.body;
    if (!AnsData) {
      return;
    }
    setLoading(false);

    const reader = AnsData.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: done_ } = await reader.read();
      done = done_;
      if (value) {
        const text = decoder.decode(value);
        setResponse((prev) => {
          let newResponse = [...prev];
          if (
            newResponse.length > 0 &&
            newResponse[newResponse.length - 1].sender === "bot"
          ) {
            newResponse[newResponse.length - 1].text += text;
          } else {
            newResponse.push({ sender: "bot", text: text });
          }
          return newResponse;
        });
      }
    }
  };

  return (
    <div className="w-full min-w-full rounded-lg border border-gray-200 flex flex-col items-center  overflow-scroll h-screen">
      <header className="bg-gray-50 dark:bg-gray-850 border-b border-gray-200 p-4 flex items-center justify-between w-full space-x-4">
        <div className="flex space-x-4 items-center justify-center">
          <Link href="/question-page">
            <MoveLeft className="w-4 h-4" />
          </Link>
          <h1 className="text-lg font-semibold flex-1">
            Chat with your models
          </h1>
        </div>
        <Button
          onClick={() => {
            setResponse([]);
          }}
          size="sm"
        >
          Clear
        </Button>
      </header>
      <div className={`p-4 w-full h-3/4 flex-1 ${response.length>1?'overflow-y-scroll':''} flex flex-col gap-4`}>
        <div  style={{animationDelay:'0.01s'}} className={`flex flex-col gap-2 ${styles.fadeIn}`}>
          {response.map((message, index) => (
            <div
              key={index}
              className={`rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 text-xs max-w-[90%]  ${
                message.sender === "bot" ? "self-start" : "self-end"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-6  h-1/4 w-full ">
        <div className=" w-[90%]">
          <Form {...form}>
            <form
              className="space-y-6 flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="modelname"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a model" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {!selectedModel.length && (
                          <SelectItem value="loading">Loading...</SelectItem>
                        )}
                        {selectedModel.map((model) => (
                          <SelectItem key={model.id} value={model.name}>
                            {model.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <Input {...field} placeholder="Your question.." />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={loading} type="submit">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
