import EventItem from "./EventItem";
import styles from "./event-list.module.css";

const EvnetList = function (props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default EvnetList;
