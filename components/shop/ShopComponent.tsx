import React from "react";
import DrawerComponent from "@/components/ui/drawer-component";
type ShopComponentProps = {
  models: {
    id: string;
    name: string;
    ImageUrl: string | null;
    description: string | null;
    searchPrompt: string | null;
  }[];
};
const ShopComponent = ({ models }: ShopComponentProps) => {
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

export default ShopComponent;
