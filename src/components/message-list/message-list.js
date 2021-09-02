import {Input, InputAdornment, makeStyles} from "@material-ui/core"
import {Send} from "@material-ui/icons"
import {useEffect, useRef, useCallback, useState} from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getEditMessageId, getTextValue, handleChangeFB} from '../../store/conversation';
import {
    sendMessage,
    getIsEdit,
    getMessageList,
    addMessageList, getPending, getError, handleChangeAfterSendFB, sendEditMessageFB, completeEdit
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
    const {roomId} = useParams ()
    const value = useSelector (getTextValue (roomId))
    const editMessageId = useSelector (getEditMessageId (roomId))
    const pending = useSelector (getPending)
    const error = useSelector (getError)
    const ref = useRef ()
    const s = useStyles ()
    const dispatch = useDispatch ()
    const sendNewMessage = () => {
        if (isEdit) {
            dispatch (sendEditMessageFB ({
                id: editMessageId,
                author: name,
                message: value
            }, roomId, editMessageId))
            dispatch (handleChangeAfterSendFB (roomId))
            dispatch (completeEdit ())
        } else {
            dispatch (sendMessage ({
                id: new Date ().getTime (),
                author: name,
                message: value
            }, roomId))
            dispatch (handleChangeAfterSendFB (roomId))
        }
    }
    const handlePressInput = ({code}) => {
        if (code === "Enter") {
            sendNewMessage ()
        }
    }
    const handleScrollBottom = useCallback (() => {
        if (ref.current) {
            ref.current.scrollTo (0, ref.current.scrollHeight)
        }
    }, [])
    useEffect (() => {
        dispatch (addMessageList ())
    }, [dispatch])
    useEffect (() => {
        handleScrollBottom ()
    }, [handleScrollBottom])
    if (pending) {
        return (<div>
            Pending.....
        </div>)
    }
    if (error) {
        return (<div>
            Oooopps something wrong.Error: {error}
        </div>)
    }
    return (
        <>
            <div ref={ref}>
                {messages [roomId].map ((message, id) => (
                    <Message key={id} {...message} />
                ))}
            </div>

            <Input
                className={s.input}
                value={value}
                onChange={(e) => dispatch (handleChangeFB (roomId, e.target.value))}
                onKeyPress={handlePressInput}
                fullWidth={true}
                placeholder="Введите сообщение..."
                endAdornment={
                    <InputAdornment position="end">
                        {value && (
                            <Send onClick={() => sendNewMessage ()} className={styles.icon}/>
                        )}
                    </InputAdornment>
                }
            />
        </>
    )
}
