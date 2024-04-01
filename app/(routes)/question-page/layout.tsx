import React from "react";


export default async function QuestionPagelayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <div>{children}</div>
    </>
  );
}
