"use client";
import GetModels from "@/fetchers/get-models";
import React, { useEffect } from "react";
import Image from "next/image";
import DrawerComponent from "@/components/ui/drawer-component";

const ShopPage = () => {
  const [models, setModels] = React.useState<
    {
      id: string;
      name: string;
      ImageUrl: string | null;
      description: string | null;
      searchPrompt: string | null;
    }[]
  >([]);
  const fetchModels = async () => {
    const models = await GetModels();
    setModels(models);
  };
  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div className="flex space-x-5 lg:p">
      {models.map((model) => (
        <div key={model.id} className="flex flex-col space-y-2">
          <img
            src={model.ImageUrl || ""}
            alt={model.name}
            width={64}
            height={64}
            className="object-cover"
          />
          <h2>{model.name}</h2>
          <DrawerComponent
            buttonText="500$"
            description="buu the model now"
            title="you sure want to buy this"
          >
            <div>hi</div>
          </DrawerComponent>
        </div>
      ))}
    </div>
  );
};

export default ShopPage;
