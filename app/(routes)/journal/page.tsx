import HamburgerDrawer from "@/components/hamburger-drawer";
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
        <nav className="border-b-4 flex items-center justify-evenly">
          <ul className="flex justify-center space-x-4 py-4 w-[100vw]">
            <li>
              <CarouselPreviousButton buttonText="Recent" />
            </li>
            <li>
              <CarouselNextButton buttonText="Calendar" />
            </li>
          </ul>
          <div className="relative right-4">
            <HamburgerDrawer />
          </div>
        </nav>
        <CarouselContent>
          <CarouselItem>
            <div className="px-4 py-6 space-y-6">
              <RecentJournalComponent getRecentEntries={getRecentEntries} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <CalendarComponent />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
}
