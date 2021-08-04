import {Message} from './components/Message'
import styles from "./app.module.css";
import {useState, useEffect} from 'react'


function App() {
    const [author, setAuthor] = useState("")
    const [text, setText] = useState("")
    const [messagesList, setMessagesList] = useState([])

    const handleSendMessage = () => {
        if (!author || !text) {
            return
        }
        setMessagesList((state) => [...state, {id: new Date().getTime(), author: author, text: text}])
        setAuthor("")
        setText("")

    }
    useEffect(() => {
        if (messagesList.length === 0 || messagesList[messagesList.length - 1].author === "bot") {
            return
        }
        setTimeout(() => {
            setMessagesList([...messagesList, {
                id: new Date().getTime(),
                author: `bot`,
                text: `${messagesList[messagesList.length - 1].author} hello to this chat and good day`
            }])

        }, 1500)


    }, [messagesList])

    return (
        <div>
            {messagesList.map(message =>
                <Message key={message.id} text={message.text} author={message.author}/>
            )}

            <form className={styles.message_form}>
                <h3>Author</h3>
                <input className={styles.author}
                       value={author}
                       type="text"
                       placeholder='Author'
                       onChange={(e) => setAuthor(e.target.value)}/>
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
