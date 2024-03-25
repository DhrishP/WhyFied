
import { CalendarComponent } from "@/components/journal/calendarComponent";
import RecentJournalComponent from "@/components/journal/recentComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextButton,
  CarouselPreviousButton,
} from "@/components/ui/carousel";
import GetRecentEntries from "@/fetchers/get-recent-entries";

export default async function Component() {
  const getRecentEntries = await GetRecentEntries();
  return (
    <>
      <Carousel>
        <nav className="border-b-4">
          <ul className="flex justify-center space-x-4 py-4">
            <li>
              <CarouselPreviousButton buttonText="Recent" />
            </li>
            <li>
              <CarouselNextButton buttonText="Calendar" />
            </li>
          </ul>
        </nav>
        <CarouselContent>
          <CarouselItem>
            <div className="px-4 py-6 space-y-6">
              <RecentJournalComponent getRecentEntries={getRecentEntries} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <CalendarComponent/>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}

function CircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
