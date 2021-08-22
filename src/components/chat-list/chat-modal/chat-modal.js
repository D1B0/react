import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addNewRoom, editRoom, getChatModalShow, getChatName, showAdder} from '../../../store/conversations';
import styles from "./chat-modal.module.css"

export const ChatModal = () => {
    const {push} = useHistory ()
    const showModal = useSelector (getChatModalShow)
    const showModalWithName = useSelector (getChatName)
    const [newRoom, setNewRoom] = useState ('')
    useEffect (() => {
        setNewRoom (showModalWithName)
    }, [setNewRoom, showModalWithName])
    const dispatch = useDispatch ()
    if (showModal) {
        return (<div className={styles.modal_chat_adder}>
            <div className={styles.modal_block}>
                <h1 className={styles.chat_head}>{!showModalWithName ? "Add New Room" : "Edit Room"}</h1>
                <div className={styles.chat_close}
                     onClick={() => dispatch (showAdder ())}>X
                </div>
                <input
                    className={styles.chat_text}
                    type="text"
                    value={newRoom}
                    onChange={e =>
                        setNewRoom (e.target.value)
                    }
                    placeholder="Chat Name"
                />
                <button
                    className={styles.chat_button}
                    type="button"
                    onClick={() => {
                        if (newRoom && !showModalWithName) {
                            dispatch (addNewRoom (newRoom))
                            setNewRoom ('')
                        } else if (newRoom && showModalWithName) {
                            push (`/chat`)
                            dispatch ((editRoom (showModalWithName, newRoom)))
                        }
                    }}>
                    {!showModalWithName ? "Add New Room" : "Edit Room"}
                </button>
            </div>

        </div>)
    }
    return (null)
}