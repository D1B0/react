import {Message} from './components/Message'
import styles from "./app.module.css";
import {useState, useEffect} from 'react'


function App() {
    const [text, setText] = useState("")
    const [value, setValue] = useState("")
    const [messagesList, setMessagesList] = useState([])

    const handleSendMessage = () => {
        if (!value || !text) {
            return
        } else {
            setMessagesList((state) => [...state, {id: new Date().getTime(), author: value, text: text}])
            setText("")
            setValue("")
        }
    }
    useEffect(() => {
        if (messagesList.length === 0 || messagesList[messagesList.length - 1].author === "bot") {
            return
        } else {
            setTimeout(() => {
                setMessagesList((state) => [...state, {
                    id: new Date().getTime(),
                    author: `bot`,
                    text: `${messagesList[messagesList.length - 1].author} hello to this chat and good day`
                }])

            }, 1500)
        }

    }, [messagesList])

    return (
        <div>
            {messagesList.map(message =>
                <Message key={message.id} message={message.text} author={message.author}/>
            )}

            <form className={styles.message_form}>
                <h3>Author</h3>
                <input className={styles.author}
                       value={value}
                       type="text"
                       placeholder='Author'
                       onChange={(e) => setValue(e.target.value)}/>
                <h3>Message</h3>
                <input className={styles.message}
                       value={text}
                       type="text"
                       placeholder='Message'
                       onChange={(e) => setText(e.target.value)}/>
                <button type="button"
                        onClick={
                            handleSendMessage
                        }>Send Message
                </button>
            </form>
        </div>
    )

}


export default App;
