import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNewRoom, getChatModalShow} from '../../../store/conversation';
import {getAllMessageList, addMessageList} from '../../../store/messages';
import styles from "./chat-modal.module.css"

export const ChatModal = ({closeModal}) => {
    const showModal = useSelector (getChatModalShow)
    const [newRoom, setNewRoom] = useState ('')
    const dispatch = useDispatch ()
    if (showModal) {
        return (<div className={styles.modal_chat_adder}>
            <div className={styles.modal_block}>
                <h1 className={styles.chat_head}>Add New Room</h1>
                <div className={styles.chat_close}
                     onClick={() => closeModal ()}>X
                </div>
                <input
                    className={styles.chat_text}
                    type="text"
                    value={newRoom}
                    onChange={e => setNewRoom (e.target.value)
                    }
                    placeholder="Chat Name"
                />
                <button
                    className={styles.chat_button}
                    type="button"
                    onClick={() => {
                        dispatch (addNewRoom (newRoom))
                        dispatch (getAllMessageList ())
                        dispatch (addMessageList ())
                    }
                    }>
                    Add New Room
                </button>
            </div>

        </div>)
    }
    return (null)
}