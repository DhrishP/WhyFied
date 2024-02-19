
import React from "react";
import {Lexend_Mega} from "next/font/google";
const Mega = Lexend_Mega({subsets:["latin"],weight:["500"]})

function AboutLanding() {
  return (
    <section className={`flex ${Mega.className} w-72 aspect-square ml-10  justify-center items-center p-8 text-2xl font-medium  text-black bg-fuchsia-200 border-4 border-black border-solid shadow-sm `}>
      <p>
        Social media is overwhelming? <br />
        <strong className=" text-yellow-500">Rediscover</strong> your
        own unique voice.
      </p>
    </section>
  );
}

export default AboutLanding;
