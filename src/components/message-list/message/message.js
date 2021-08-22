import {ListItemIcon} from '@material-ui/core';
import {BorderColor, HighlightOff} from '@material-ui/icons';
import classNames from "classnames"
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {deleteMessage, startEditMessage} from '../../../store/messages';
import {getProfileName} from '../../../store/profile';
import styles from "./message.module.css"

export function Message ({author, message, id}) {
    const {roomId} = useParams ()
    const name = useSelector (getProfileName)
    const dispatch = useDispatch ()
    return (
        <div
            className={classNames (styles.message, {
                [styles.currentMessage]: author === name
            })}
        >
            <h3>{message}</h3>
            <p>{author}</p>
            <p>12.03</p>
            <div className={styles.editor}>
                <ListItemIcon>
                    <BorderColor
                        className={styles.icon}
                        onClick={() => dispatch (startEditMessage (id, roomId))}
                    />
                </ListItemIcon>
                <ListItemIcon>
                    <HighlightOff
                        className={styles.icon}
                        onClick={() => dispatch (deleteMessage (id, roomId))}/>
                </ListItemIcon>
            </div>
        </div>
    )
}