import classNames from "classnames"
import {useSelector} from 'react-redux';
import styles from "./message.module.css"

export function Message ({author, message}) {
    const name = useSelector ((state) => state.profile.user.name)
    return (
        <div
            className={classNames (styles.message, {
                [styles.currentMessage]: author === name
            })}
        >
            <h3>{message}</h3>
            <p>{author}</p>
            <p>12.03</p>
        </div>
    )
}