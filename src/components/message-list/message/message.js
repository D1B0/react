import classNames from "classnames"
import {useSelector} from 'react-redux';
import styles from "./message.module.css"

export function Message ({author, message}) {
    const nameSelector = (state) => {
        return state.profile.user.name
    }
    const name = useSelector (nameSelector || "User")
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