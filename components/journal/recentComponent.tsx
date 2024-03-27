"use client";
import { CircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const RecentJournalComponent = ({
  getRecentEntries,
}: {
  getRecentEntries: any;
}) => {
  const router = useRouter();
  return (
    <>
      {getRecentEntries &&
        getRecentEntries.map((entry: any) => (
          <div
            key={entry.id}
            onClick={() => router.push(`/journal/${entry.id}`)}
            className="flex items-start space-x-4 cursor-pointer"
          >
            <CircleIcon className="text-purple-400" />
            <div className="flex-1 p-4 border rounded bg-lime-300">
              <h3 className="font-semibold text-gray-700 capitalize">
                {entry.getQuestion.question}
              </h3>
              <p className="mt-2 text-gray-600">{entry.perspective1}</p>
              {entry.perspective5 && (
                <p className="mt-4 text-sm text-gray-700 font-semibold bg-violet-300">
                  Goal/Small win: {entry.perspective5}
                </p>
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default RecentJournalComponent;
