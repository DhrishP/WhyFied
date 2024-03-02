import React from "react";
import Card from "../compo/Card";

const Testimonials = () => {
  return (
    <div className="h-screen bg-orange-100">
      <div className="relative top-8 pt-8 text-4xl text-center text-black font-bold w-full z-20">
        What do we do?
      </div>

      <div className="grid grid-cols-12">
        <div className="mt-[20vh] w-fit text-8xl text-yellow-500 max-md:mt-10 max-md:max-w-full max-md:text-4xl relative left-[12vw] font-bold col-span-4 leading-tight">
          START
          <br />
          TO <br />
          TAKE <br />
          CHANGE <br />
        </div>

        <div className="flex flex-col space-y-14 col-span-8 relative top-[15vh]">
          <Card
            color={"bg-[#f2f491]"}
            text1={"We give you a WHY question to think"}
            text3={"everyday."}
            className="h-[18vh] w-[700px] whitespace-nowrap px-4 py-9 place-content-start z-20"
          />

          <div className="h-[800px] w-[725px] bg-[radial-gradient(ellipse_at_center,_#F4d254_40%,#ffedd5_70%)] absolute z-10 right-0 bottom-[1vh]"></div>

          <Card
            color={"bg-[#A1D3D0]"}
            text1={"Journalaize your thinking journey and"}
            text3={"get rewarded."}
            className="h-[18vh] w-[700px] whitespace-nowrap px-4 py-9 place-content-start z-10"
          />

          <Card
            color={"bg-[#D3DAFF]"}
            text1={"Earn and get a chance to"}
            text3={"get questions by the GREATS"}
            className="h-[18vh] w-[700px] whitespace-nowrap px-4 py-9 place-content-start z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
