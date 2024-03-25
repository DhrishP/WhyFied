"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import GetDates from "@/fetchers/get-dates";
import { useRouter } from "next/navigation";
import GetEntryByDate from "@/fetchers/get-entry-by-date";
import { toast } from "sonner";
import Loading from "@/app/chatbot/loading";

export function CalendarComponent() {
  const [dates, setDates] = React.useState<Date[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState<
    { userId: string; timestamp: string; isAnswered: boolean }[]
  >([]);
  console.log(dates);
  const router = useRouter();
  React.useEffect(() => {
    setLoading(false);
    const fetchDates = async () => {
      const result = await GetDates();
      if (!result) {
        return;
      }
      setResults(result);
      const datesAsStrings: string[] = result.map((date) => date.timestamp);
      setDates(
        datesAsStrings.map((dateStr: string) => {
          const [day, month, year] = dateStr.split("/");
          return new Date(Number(year), Number(month) - 1, Number(day));
        })
      );
    };

    fetchDates();
  }, []);
  const onselect = async (date: Date) => {
    if (
      dates.find((d) => d.toLocaleDateString() === date.toLocaleDateString())
    ) {
      setLoading(true);
      const updatedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const updatedDate2 = updatedDate
        .split("/")
        .map((part) => part.replace(/^0+/, ""))
        .join("/");
      console.log(updatedDate2);
      const userId = results.find(
        (result) => result.timestamp === updatedDate2
      );
      if (!userId?.userId) {
        return alert("No data found2");
      }
      const journalByDate = await GetEntryByDate(updatedDate2);
      if (!journalByDate) {
        return alert("No data found");
      }
      router.push(`/journal/${journalByDate.id}`);
    } else {
      toast.warning("No Entries found");
      return;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`flex w-screen overflow-hidden h-[60vh] items-center justify-center }`}
    >
      <Calendar
        mode="multiple"
        selected={dates}
        onDayClick={(day: Date) => {
          onselect(day);
        }}
        className={`rounded-md border w-3/4  h-3/4 bg-purple-200`}
      />
    </div>
  );
}
