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
                  location === "/question-page"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/question-page"}
              >
                <h2
                  className={`${
                    location === "/question-page"
                      ? "text-yellow-200"
                      : "text-gray-100"
                  } `}
                >
                  Home❔
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/shop"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/shop"}
              >
                <h2
                  className={`${
                    location === "/shop" ? "text-yellow-200" : "text-gray-100"
                  } `}
                >
                  Shop🗽
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/chatbot"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/chatbot"}
              >
                <h2
                  className={`${
                    location === "/chatbot"
                      ? "text-yellow-200"
                      : "text-gray-100"
                  } `}
                >
                  Talk to Models🤖
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/journal"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/journal"}
              >
                <h2
                  className={`${
                    location === "/journal"
                      ? "text-yellow-200"
                      : "text-gray-100"
                  } `}
                >
                  Journal📓
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/profile"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/profile"}
              >
                <h2
                  className={`${
                    location === "/profile"
                      ? "text-yellow-200"
                      : "text-gray-100"
                  } `}
                >
                  Profile🅿️
                </h2>
              </Link>
              <Link
                className={`${
                  location === "/settings"
                    ? "bg-black text-yellow-500"
                    : "bg-black text-yellow-500"
                } py-1 block w-5/6 text-center`}
                href={"/settings"}
              >
                <h2
                  className={`${
                    location === "/settings"
                      ? "text-yellow-200"
                      : "text-gray-100"
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
