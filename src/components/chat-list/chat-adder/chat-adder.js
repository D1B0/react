import {useDispatch} from 'react-redux';
import {showAdder} from '../../../store/conversations';
import styles from "./chat-adder.module.css"

export const ChatAdder = () => {
    const dispatch = useDispatch ()
    return (
        <button
            className={styles.btn_chat_add}
            type="button"
            onClick={() => dispatch (showAdder ())}
        >Add New Room
        </button>
    )
}