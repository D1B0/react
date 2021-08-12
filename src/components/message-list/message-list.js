import {Input, InputAdornment, makeStyles} from "@material-ui/core"
import {Send} from "@material-ui/icons"
import {useEffect, useRef, useCallback, useState} from "react"
import {useParams} from 'react-router-dom';
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
export const MessageList = ({messages, sendMessage}) => {
    const {roomId} = useParams ()
    const [text, setText] = useState ("")
    const ref = useRef ()
    const s = useStyles ()
    const handleSendMessage = () => {
        if (!text) {
            return
        }
        setText ("")
        sendMessage ({message: text}, roomId)
    }
    useEffect (() => {
        if (messages.length === 0 || messages[messages.length - 1].author === "Bot") {
            return
        }
        setTimeout (() => {
            const lastUser = messages[messages.length - 1].author
            sendMessage ({author: 'Bot', message: `${lastUser} hello`}, roomId, "Bot")
        }, 1500)
    }, [messages, roomId, sendMessage])
    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            handleSendMessage ()
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
                {messages.map ((message, id) => (
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
                            <Send onClick={handleSendMessage} className={styles.icon}/>
                        )}
                    </InputAdornment>
                }
            />
        </>
    )
}
