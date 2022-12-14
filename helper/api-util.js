export const fetchData = async function () {
  const res = await fetch(
    `https://react-https-6c233-default-rtdb.asia-southeast1.firebasedatabase.app/events.json`
  );
  const data = await res.json();

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
  return transformData;
};

export async function getOnGoingEvents() {
  const allEvents = await fetchData();
  return allEvents.filter((el) => el.isFeatured);
}

export async function getSingleEventById(id) {
  const allEvents = await fetchData();
  return allEvents.find((event) => event.id === id);
}

export async function getAllAvialableEvents() {
  const allEvents = await fetchData();
  return allEvents;
}

export async function getFilterEvent(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await fetchData();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
