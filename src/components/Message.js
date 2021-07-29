import styles from "./message.module.css";

export function Message(props) {
    return <h1 className={styles.message}>Привет, {props.message}</h1>;
}