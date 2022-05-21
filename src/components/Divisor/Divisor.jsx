import styles from "./Divisor.module.css";

export default function Divisor(props) {
  return <h1 className={styles.Divisor}>{props.texto}</h1>;
}
