import {Input, InputAdornment, makeStyles} from "@material-ui/core"
import {Send} from "@material-ui/icons"
import {useEffect, useRef, useCallback, useState} from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {addMessage} from '../../store/messages';
import {Message} from "./message"
import styles from "./message-list.module.css"

const useStyles = makeStyles (() => {
    return {
        input: {
            color: "#9a9fa1",
            padding: "10px 15px",
            fontSize: " 15px"
        }
    }
})
export const MessageList = () => {
    const messages = useSelector ((state) => state.messages)
    const name = useSelector ((state) => state.profile.user.name)
    const {roomId} = useParams ()
    const [text, setText] = useState ("")
    const ref = useRef ()
    const s = useStyles ()
    const dispatch = useDispatch ()
    const sendMessage = useCallback ((authorText = name, textMessage = text) => {
        if (!textMessage) {
            return
        }
        if (!name) {
            authorText = "User"
        }
        dispatch (addMessage ({id: new Date ().getTime (), author: authorText, message: textMessage}, roomId))
    }, [dispatch, roomId, name, text])
    useEffect (() => {
        if (messages[roomId].length === 0 || messages[roomId][messages[roomId].length - 1]?.author === "Bot") {
            return
        }
        setTimeout (() => {
            const lastUser = messages[roomId][messages[roomId].length - 1].author
            dispatch (addMessage ({id: new Date ().getTime (), author: "Bot", message: `Hello ${lastUser}`}, roomId))
        }, 1500)
    }, [messages, roomId, sendMessage, dispatch])
    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage (name, text)
            setText ('')
        }
    }
    const handleScrollBottom = useCallback (() => {
        if (ref.current) {
            ref.current.scrollTo (0, ref.current.scrollHeight)
        }
    }, [])
    useEffect (() => {
        handleScrollBottom ()
    }, [handleScrollBottom])
    return (
        <>
            <div ref={ref}>
                {messages[roomId].map ((message, id) => (
                    <Message key={id} {...message} />
                ))}
            </div>

            <Input
                className={s.input}
                value={text}
                onChange={(e) => setText (e.target.value)}
                onKeyPress={handlePressInput}
                fullWidth={true}
                placeholder="Введите сообщение..."
                endAdornment={
                    <InputAdornment position="end">
                        {text && (
                            <Send onClick={() => sendMessage ()} className={styles.icon}/>
                        )}
                    </InputAdornment>
                }
            />
        </>
    )
}
