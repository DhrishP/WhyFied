import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import NeoButton from "./neo-brutalist/button";

const DrawerComponent = ({
  children,
  buttonText,
  title,
  description,
  className
}: {
  children: React.ReactNode;
  buttonText: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <Drawer>
      <DrawerTrigger className={className} asChild>
        <NeoButton
        className="self-center"
          color="lime"
          rounded="none"
          size="sm"
          buttonText={buttonText}
        />
      </DrawerTrigger>
      <DrawerContent className="lg:mx-20 ">
        <DrawerHeader className="flex items-center justify-between ">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerClose>Close</DrawerClose>
        </DrawerHeader>
        <DrawerDescription className="pl-3">{description}</DrawerDescription>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
