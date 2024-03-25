import GetEntryById from "@/fetchers/get-entry-by-id";

import React from "react";

const  JournalIdPage =async ({
  params,
}: {
  params: {
    journalId: string;
  };
}) => {
  
  const entry = await GetEntryById(params.journalId);
  if(!entry) {
    return <div>Entry not found</div>
  }
  console.log(entry)

  return <div>JournalIdPage</div>;
};

export default JournalIdPage;
