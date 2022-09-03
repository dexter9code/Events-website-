import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";

import {
  fetchData,
  getSingleEventById,
  getAllAvialableEvents,
  getOnGoingEvents,
} from "./../../helper/api-util";

const SingleEvent = function (props) {
  const router = useRouter();
  const eventId = router.query.id;

  const item = getEventById(eventId);

  // const item = props.events;
  // console.log(item);

  if (!item) return <p>No Event Found</p>;
  return (
    <div>
      <>
        <EventSummary title={item.title} />
        <EventLogistics
          date={item.date}
          address={item.location}
          image={item.image}
          imageAlt={item.title}
        />
        <EventContent>{item.description}</EventContent>
      </>
    </div>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.id;
  // const event = await getSingleEventById(eventId);
  const allEvents = await fetchData();
  const event = allEvents.filter((el) => el.id === eventId);
  return {
    props: { events: event },
  };
}

export async function getStaticPaths() {
  const events = await getOnGoingEvents();
  const paramsId = events.map((e) => ({ params: { id: e.id } }));
  return {
    paths: paramsId,
    fallback: true,
  };
}

export default SingleEvent;
