"use client";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import NeoButton from "@/components/ui/neo-brutalist/button";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import registerEmail from "@/actions/registerEmail";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    startTransition(() => {
      registerEmail(email)
        .then((data) => {
          if (data.success) {
            setEmail("");
            toast("Email registered successfully,Thanks for taking interest😉");
          }
          if (data.error) {
            toast("Email didn't get register due to some error🥺")
          }
          if(data.exist){
            toast("Email already registered,Try a new one!😉")
          }
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <div className="font-semibold bg-orange-100 pt-10 text-lg flex items-center justify-center flex-col lg:px-72 px-6 space-y-4">
      <h2 className="font-extrabold text-3xl pt-10">
        Whyfied? - a Gamified platform to make you think 🤔
      </h2>
      <h3 className="font-bold text-xl">
        Problem and what we are solving🔍 :-
      </h3>
      <div className="flex flex-col space-y-2 text-[1rem]">
        <p>
          1.People have accepted boring life in the world of distractions and
          the internet being a catalyst to it
        </p>
        <p>
          2. All the big tech corporations are just making you addicted to their
          products by optimising their product in every aspect to make you
          addicted.(One short scroll and your 30 minutes gone)
        </p>
        <p>
          3. Hollow things such as height, face and materialistic are considered
          more important than the things that makes you a good humans that is
          values and purpose is considered uncool. (Rise of Onlyfans, Tiktok,
          etc.)
        </p>
        <p>
          4. People are not understanding what wonderful things they can do if
          they just start asking questions about their life and the world around
          them.
        </p>
      </div>
      <h3 className="font-bold text-xl">Solution for this✍️:-</h3>
      <div className="text-xl font-bold">
        <p>Simple Just start asking questions specially Why&apos;s.</p>
      </div>
      <h2 className="text-center text-2xl font-extrabold">&quot;But&quot;</h2>
      <p className="text-center px-10">
        Asking Why&apos;s everyday is a boring task so we are trying to{" "}
        <span className="font-extrabold">&quot;gamify&quot;</span> it. We will
        your curiousness to not abuse but to make you change for better,Also you
        won&apos;t be alone.Join Community of thinkers who are trying to improve
        from scratch or have reached a good level of critical thinking. <br />
        <i className="text-xl font-bold text-center ">
          &quot;Community of people who want change in life&quot;
        </i>
      </p>
      <i className="text-2xl font-extrabold px-24">Who is it for❔:-</i>
      <p className="text-xl  text-center">
        &quot;People who think they need to change and have realised the traps
        of digital age and want to change and are willing to build good
        habits&quot;
      </p>
      <div className="text-2xl font-semibold space-y-2 mt-2">
        <h2>
          Interested in how are we going to make you curious through
          gamification?
        </h2>
        <form className="flex space-x-2 mt-2 pb-10 " onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
            className="w-full border border-black"
            placeholder="Enter your email..."
            type="email"
          />
          <NeoButton
            className="font-semibold"
            disabled={isPending}
            size="sm"
            buttonText="Submit"
            color="lime"
          />
        </form>
      </div>
    </div>
  );
}
