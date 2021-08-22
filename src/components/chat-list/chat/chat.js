import {
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from "@material-ui/core"
import {AccountCircle, BorderColor, HighlightOff} from "@material-ui/icons"
import classnames from "classnames"
import {memo, useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {deleteRoom, showAdderWithName} from '../../../store/conversations';
import {getMessageListByTitle} from '../../../store/messages';
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
    const deleteRooms = useCallback ((room) => {
        push ('/chat')
        dispatch (deleteRoom (room))
    }, [dispatch, push])
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
                    <BorderColor
                        className={styles.removeIcon}
                        onClick={() => dispatch (showAdderWithName (title))}
                    />
                </ListItemIcon>
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