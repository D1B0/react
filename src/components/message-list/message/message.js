import classNames from "classnames"
import styles from "./message.module.css"

export function Message ({author, message, id}) {
    return (
        <div
            className={classNames (styles.message, {
                [styles.currentMessage]: author === name
            })}
        >
            <h3>{message}</h3>
            <p>{author}</p>
            <b>12.03</b>
            <div className={styles.editor}>Х
            </div>
        </div>
    )
}