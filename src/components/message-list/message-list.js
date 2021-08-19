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
    const messagesSelector = (state) => {return state.messages}
    const nameSelector = (state) => {return state.profile.user.name}
    const messages = useSelector (messagesSelector)
    const name = useSelector (nameSelector || 'User')
    const {roomId} = useParams ()
    const [text, setText] = useState ("") //я его оставлю потому что считаю что этому не надо быть в глобальном стейте
    const ref = useRef ()
    const s = useStyles ()
    const dispatch = useDispatch ()
    const sendMessage = useCallback ((authorText = name, textMessage = text) => {
        if (!textMessage) {
            return
        }
        dispatch (addMessage ({id: new Date ().getTime (), author: authorText, message: textMessage}, roomId))
    }, [dispatch, roomId, name, text])
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
