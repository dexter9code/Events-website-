/* eslint-disable @next/next/no-img-element */
import styles from "./eventitem.module.css";
import Button from "./../common/button";
import DateIcon from "./../icons/date-icon";
import AddressIcon from "./../icons/address-icon";
import ArrowRightIcon from "./../icons/arrow-right-icon";

const EventItem = function (props) {
  const { title, image, date, location, id } = props.item;

  const fixingDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{fixingDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.actions}>
          {/* <Link href={exploreLink}>Explore Events</Link> */}
          <Button to={exploreLink}>
            <span>Explore Events</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
