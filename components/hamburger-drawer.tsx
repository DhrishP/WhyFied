"use client";
import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { ListFilter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HamburgerDrawer = () => {
  const location = usePathname();
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <ListFilter className="w-5 h-5" />
        </DrawerTrigger>
        <DrawerContent className="bg-slate-200">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Different pages to explore</DrawerDescription>
          </DrawerHeader>
          <div>
            <div className="flex flex-col items-center space-y-3 p-4">
              <Link
                className={`${
                  location === "/question-page" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/question-page"}
              >
                <h2
                  className={`${
                    location === "/question-page"
                      ? "text-lime-200"
                      : "text-lime-700"
                  } `}
                >
                  Home❔
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/shop" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/shop"}
              >
                <h2
                  className={`${
                    location === "/shop" ? "text-lime-200" : "text-lime-700"
                  } `}
                >
                  Shop🗽
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/chatbot" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/chatbot"}
              >
                <h2
                  className={`${
                    location === "/chatbot" ? "text-lime-200" : "text-lime-700"
                  } `}
                >
                  Talk to Models🤖
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/journal" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/journal"}
              >
                <h2
                  className={`${
                    location === "/journal" ? "text-lime-200" : "text-lime-700"
                  } `}
                >
                  Journal📓
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/profile" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/profile"}
              >
                <h2
                  className={`${
                    location === "/profile" ? "text-lime-200" : "text-lime-700"
                  } `}
                >
                  Profile🅿️
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/settings" ? "bg-gray-700" : "bg-lime-200"
                } py-1 block w-5/6 text-center`}
                href={"/settings"}
              >
                <h2
                  className={`${
                    location === "/settings" ? "text-lime-200" : "text-lime-700"
                  } `}
                >
                  Settings⚙️
                </h2>
              </Link>
            </div>
          </div>
          {/* <DrawerFooter>
            <NeoButton buttonText="Submit" />
            <DrawerClose>
              <NeoButton buttonText="Close" />
            </DrawerClose> */}
          {/* </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerDrawer;
