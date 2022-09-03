import { getFeaturedEvents } from "./../dummy-data";
import EvnetList from "./../components/events/event-list";
import useSWR from "swr";

export default function Home(props) {
  const items = getFeaturedEvents();
  return (
    <div>
      <EvnetList items={items} />
    </div>
  );
}
