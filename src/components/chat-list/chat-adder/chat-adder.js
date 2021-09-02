import styles from "./chat-adder.module.css"

export const ChatAdder = ({isOpen}) => {
    return (
        <button
            className={styles.btn_chat_add}
            type="button"
            onClick={() => isOpen ()}
        >Add New Room
        </button>
    )
}