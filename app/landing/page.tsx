import React from "react";
import Navbar from "@/components/landing-page/navbar";
import Herobody from "@/components/landing-page/herobody";
import AboutLanding from "@/components/landing-page/about";


function Page() {
  return (
    <>
      <Navbar />
      <Herobody />
      <AboutLanding/>
    </>
  );
}

export default Page;
