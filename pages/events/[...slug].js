import { useRouter } from "next/router";
import { getFilteredEvents } from "./../../dummy-data";
import EvnetList from "./../../components/events/event-list";
import Button from "./../../components/common/button";

const FilteredEvenetsPage = function (props) {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p>Loading....</p>;
  }
  const filteredYear = filteredData[0] * 1;
  const filteredMonth = filteredData[1] * 1;

  if (
    isNaN(filteredMonth) ||
    isNaN(filteredYear) ||
    filteredYear > 2030 ||
    filteredMonth > 12 ||
    filteredMonth < 1 ||
    filteredYear < 2021
  )
    return <p>Invalid filter Please Adjust your Values..</p>;

  const event = getFilteredEvents({ year: filteredYear, month: filteredMonth });
  if (!event || event.length === 0) {
    return (
      <>
        <p className="center">No Events Found </p>

        <div className="center">
          <Button to={`/events`}>Go Back </Button>
        </div>
      </>
    );
  }

  return (
    <div>
      <EvnetList items={event} />
    </div>
  );
};

export default FilteredEvenetsPage;
