import {Input, InputAdornment, makeStyles} from "@material-ui/core"
import {Send} from "@material-ui/icons"
import {useEffect, useRef, useCallback} from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    addMessage,
    clearMessageText, completeEditMessage, getEditId, getIsEdit,
    getMessageList,
    getTextMessage,
    handleChangeTextMessage
} from '../../store/messages';
import {getProfileName} from '../../store/profile';
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
    const messages = useSelector (getMessageList)
    const name = useSelector (getProfileName)
    const isEdit = useSelector (getIsEdit)
    const id = useSelector (getEditId)
    const {roomId} = useParams ()
    const value = useSelector (getTextMessage)
    const ref = useRef ()
    const s = useStyles ()
    const dispatch = useDispatch ()
    const sendMessage = useCallback (() => {
        if (isEdit) {
            dispatch (completeEditMessage (id, roomId))
        } else {
            dispatch (addMessage (name, roomId))
        }
        dispatch (clearMessageText ())
    }, [dispatch, roomId, name, id, isEdit])
    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendMessage ()
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
                value={value}
                onChange={(e) => dispatch (handleChangeTextMessage (e.target.value))}
                onKeyPress={handlePressInput}
                fullWidth={true}
                placeholder="Введите сообщение..."
                endAdornment={
                    <InputAdornment position="end">
                        {value && (
                            <Send onClick={() => sendMessage ()} className={styles.icon}/>
                        )}
                    </InputAdornment>
                }
            />
        </>
    )
}
