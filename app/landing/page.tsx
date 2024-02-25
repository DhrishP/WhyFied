import React from "react";
import Navbar from "@/components/landing-page/navbar";
import Herobody from "@/components/landing-page/herobody";
import About from "@/components/landing-page/about";
import Testimonials from "@/components/landing-page/testimonials";

function Page() {
  return (
    <>
      <div className="bg-orange-100">
        <Navbar />
        <Herobody />
        <About />
        <Testimonials />
      </div>
    </>
  );
}

export default Page;
