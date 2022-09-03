import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "./../../components/event-detail/event-summary";
import EventLogistics from "./../../components/event-detail/event-logistics";
import EventContent from "./../../components/event-detail/event-content";

const SingleEvent = function (props) {
  const router = useRouter();
  const eventId = router.query.id;

  const item = getEventById(eventId);

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

export default SingleEvent;
