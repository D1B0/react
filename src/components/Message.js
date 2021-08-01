import styles from "./message.module.css";

export function Message({author, message}) {
    return <h1 className={styles.message}>{author}: {message} </h1>;
}