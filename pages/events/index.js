import EvnetList from "./../../components/events/event-list";
import { getAllEvents } from "./../../dummy-data";
import EventSearch from "./../../components/events/EventSearch";
import { useRouter } from "next/router";
const Events = function (props) {
  const router = useRouter();

  const findEvents = function (year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  const items = getAllEvents();
  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EvnetList items={items} />
    </div>
  );
};

export default Events;
