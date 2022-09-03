import Link from "next/link";
import styles from "./button.module.css";
const Button = function (props) {
  if (props.to) {
    return (
      <Link href={props.to}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  } else
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
};

export default Button;
