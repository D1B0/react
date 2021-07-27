import styles from "../styles/app.module.css";

export function Message(props) {
    console.log(props)
    return <h1 className={styles.message}>Привет, {props.message.name}</h1>;
}