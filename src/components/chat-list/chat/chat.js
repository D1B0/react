import {
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from "@material-ui/core"
import {AccountCircle, BorderColor, HighlightOff} from "@material-ui/icons"
import classnames from "classnames"
import {memo, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {deleteRoomChatFB, showModalWindow, startChatEdit} from '../../../store/conversation';
import {deleteRoomChatMessagesFB, getMessageListByTitle} from '../../../store/messages';
import styles from "./chat.module.css"

const useStyles = makeStyles (() => {
    return {
        item: {
            "&.Mui-selected": {
                backgroundColor: "#2b5278"
            },
            "&.Mui-selected:hover": {
                backgroundColor: "#2b5278"
            }
        }
    }
})
function ChatView ({title, selected}) {
    const {push} = useHistory ()
    const dispatch = useDispatch ()
    const messagesByTitle = useMemo (() => getMessageListByTitle (title), [title])
    const messages = useSelector (messagesByTitle)
    const lastMessage = messages[messages.length - 1]
    const s = useStyles ()
    const deleteRooms = (room) => {
        push ('/chat')
        dispatch (deleteRoomChatFB (room))
        dispatch (deleteRoomChatMessagesFB (room))
    }
    return (
        <div className={styles.block}><Link to={`/chat/${title}`}>
            <ListItem
                className={classnames (s.item)}
                button={true}
                selected={selected}

            >
                <ListItemIcon>
                    <AccountCircle fontSize="large" className={styles.icon}/>
                </ListItemIcon>
                <div className={styles.description}>
                    <ListItemText className={styles.text} primary={title}/>
                    {lastMessage && (
                        <ListItemText
                            className={styles.text}
                            primary={`${lastMessage.author}: ${lastMessage.message}`}
                        />
                    )}
                    <ListItemText className={styles.text} primary="12.30"/>


                </div>
            </ListItem>
        </Link>
            <div className={styles.editor}>
                <ListItemIcon>
                    <HighlightOff
                        className={styles.removeIcon}
                        onClick={() => deleteRooms (title)}/>
                </ListItemIcon>
            </div>
        </div>
    )
}
export const Chat = memo (ChatView)