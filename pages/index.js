import EvnetList from "./../components/events/event-list";

export default function Home(props) {
  const unFilteredData = props.events;
  const items = unFilteredData.filter((el) => el.isFeatured);
  return (
    <div>
      <EvnetList items={items} />
      test
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://react-https-6c233-default-rtdb.asia-southeast1.firebasedatabase.app/events.json`
  );
  const data = await res.json();
  if (!data)
    return {
      notFound: true,
    };

  const transformData = [];

  for (const key in data) {
    transformData.push({
      id: key,
      title: data[key].title,
      description: data[key].description,
      location: data[key].location,
      date: data[key].date,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
    });
  }

  return {
    props: { events: transformData },
    revalidate: 1800,
  };
}
