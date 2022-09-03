import Link from "next/link";
import styles from "./mainHeader.module.css";
const Header = function (props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={"/"}>Next Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
