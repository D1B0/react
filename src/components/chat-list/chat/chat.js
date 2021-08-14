import {
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from "@material-ui/core"
import {AccountCircle} from "@material-ui/icons"
import {useSelector} from 'react-redux';
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
export function Chat ({title, selected}) {
    const messages = useSelector ((state) => state.messages[title])
    const lastMessage = messages[messages.length - 1]
    const s = useStyles ()
    return (
        <ListItem
            className={s.item}
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
    )
}
