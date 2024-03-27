"use client";
import React, { useState } from "react";
import DrawerComponent from "@/components/ui/drawer-component";
import Image from "next/image";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import NeoButton from "../ui/neo-brutalist/button";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { $Enums } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import HamburgerDrawer from "../hamburger-drawer";
type ShopComponentProps = {
  models: {
    id: string;
    name: $Enums.ModelName;
    fullName: string;
    shopdescription: string;
    description: string;
    searchPrompt: string | null;
    price: number;
    ImageUrl: string;
    HeadImageUrl: string | null;
    Sarcasm: number | null;
    EaseToUnderstand: number | null;
    ContextSensitivity: number | null;
  }[];
};

const ShopComponent = ({ models }: ShopComponentProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (id: string, price: number) => {
    setLoading(true);
    const res = await fetch("/api/shop/buy-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        modelId: id,
        price: price,
      }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      toast.error(data.body);
      setLoading(false);
      return;
    }
    toast.success(data.body);
    setOpen(true);
    setLoading(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <DialogContent className="w-[90vw]">
          <DialogHeader>
            <h3 className="text-center font-bold text-3xl ">🎊</h3>
            <DialogTitle>Model Purchased</DialogTitle>
            <DialogDescription>
              You can talk to your new model now
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-2">
            <NeoButton
              buttonText="Talk to Model"
              className="w-3/4"
              color="lime"
              onClick={() => {
                router.push("/chatbot");
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
      <header className="bg-gray-50 w-screen h-[10vh]  dark:bg-gray-850 border-b border-gray-200 p-4 flex items-center justify-between  space-x-4">
        <div className="flex space-x-4 items-center justify-center">
          <h1 className="text-lg font-semibold flex-1">Shop</h1>
        </div>
        <div>
          <HamburgerDrawer />
        </div>
        {/* <Button
          onClick={() => {
            console.log("nothing");
          }}
          size="sm"
        ></Button> */}
      </header>
      <Carousel>
        <CarouselContent>
          {models.map((model) => (
            <CarouselItem
              key={model.id}
              className="flex flex-col overflow-hidden w-screen h-[90vh]"
            >
              <div className="h-3/4  flex-col w-[95vw] overflow-hidden flex items-center justify-center">
                <img
                  src={model.ImageUrl}
                  alt={model.name}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
                <h2 className="font-semibold">{model.name}</h2>
              </div>
              <DrawerComponent
                className="h-1/4 w-[90vw] flex items-center justify-center"
                buttonText={model.price.toString()}
                description=""
                title="YOU SURELY WANT TO BUY THIS MODEL?"
              >
                <div className="h-[30vh] flex mt-2 ">
                  <div className="flex w-1/2 items-center ">
                    <Image
                      src={model.ImageUrl}
                      alt={model.name}
                      width={200}
                      height={200}
                    />
                    <div className="absolute bottom-0 left-0 transform translate-y-1/2 w-full h-1/2 bg-gradient-to-t from-slate-300 to-transparent rounded-full opacity-80 z-20 "></div>
                  </div>
                  <div className="flex w-1/2 flex-col ">
                    <h2 className=" text-center font-bold  text-lg">
                      {model.fullName}
                    </h2>
                    <h4 className="font-desc text-center text-sm my-2">
                      {model.shopdescription}
                    </h4>
                    <NeoButton
                      disabled={loading}
                      buttonText="Buy Now"
                      color="lime"
                      className="w-[80%] mt-4 self-center"
                      onClick={() => {
                        onSubmit(model.id, model.price);
                      }}
                    />
                  </div>
                </div>
              </DrawerComponent>
              ;
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default ShopComponent;
