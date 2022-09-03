const fetchData = async function () {
  const res = await fetch(
    `https://react-https-6c233-default-rtdb.asia-southeast1.firebasedatabase.app/events.json`
  );
  const data = res.json();

  const transformData = [];

  for (const key in data) {
    transformData.push({
      id: key,
      ...data[key],
    });
  }
  return transformData;
};

export async function getOnGoingEvents() {
  const allEvents = await fetchData();
  return allEvents.filter((el) => el.isFeatured);
}
