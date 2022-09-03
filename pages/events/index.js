import EvnetList from "./../../components/events/event-list";
import { getAllEvents } from "./../../dummy-data";
import EventSearch from "./../../components/events/EventSearch";
import { useRouter } from "next/router";
import { getAllAvialableEvents } from "../../helper/api-util";

const Events = function (props) {
  const router = useRouter();

  const findEvents = function (year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };

  // const items = getAllEvents();
  const items = props.events;
  console.log(items);
  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <EvnetList items={items} />
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const events = await getAllAvialableEvents();

  return {
    props: { events },
    revalidate: 1800,
  };
}
