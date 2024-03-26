import { auth } from "@/auth";
import OptionsCaraosel from "@/components/landing-webapp/options-caraosel";
import { redirect } from "next/navigation";
import React from "react";

const PreferencesSliderPage = async () => {
  const session = await auth();
  const res = await prisma?.preferences.findFirst({
    where: {
      userId: session?.user?.id,
    },
  });
  if (res) {
    redirect("/question-page");
  }
  return <OptionsCaraosel />;
};

export default PreferencesSliderPage;
