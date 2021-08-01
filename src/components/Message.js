import styles from "./message.module.css";

export function Message({author, text}) {
    return <h1 className={styles.message}>{author}: {text} </h1>;
}