
import React from "react";

export default async function QuestionPagelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/question-page/check-timestamp`,
    { method: "POST", cache: "no-store" }
  );
  if (res.status === 200) {
    return <>{children}</>;
  }
  return (
    <>
      <p>something went wrong</p>
    </>
  );
}
