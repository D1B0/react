import {useEffect, useState, useRef} from 'react';
import {Button, TextField} from '@material-ui/core';

export const MessageList = ({name}) => {
    const focusRef = useRef (null)
    const [author, setAuthor] = useState ("")
    const [text, setText] = useState ("")
    const [messagesList, setMessagesList] = useState ([])
    const handleSendMessage = () => {
        if (!author || !text) {
            return
        }
        setMessagesList ((state) => [...state, {id: new Date ().getTime (), author: author, text: text}])
        setAuthor ("")
        setText ("")
        focusRef.current.focus ()
    }
    useEffect (() => {
        if (messagesList.length === 0 || messagesList[messagesList.length - 1].author === "bot") {
            return
        }
        setTimeout (() => {
            setMessagesList ([...messagesList, {
                id: new Date ().getTime (),
                author: `bot`,
                text: `${messagesList[messagesList.length - 1].author} hello to this chat and good day`
            }])
        }, 1500)
    }, [messagesList])
    return (
        <div>
            {messagesList.map ((message) =>
                <Message key={message.id} text={message.text} author={message.author}/>
            )}

            <form style={{display: 'flex', flexDirection: 'column'}}>
                <h3>Author</h3>
                <TextField

                    id="outlined-basic"
                    label="Author"
                    variant="outlined"
                    value={author}
                    type="text"

                    onChange={(e) => setAuthor (e.target.value)}/>
                <h3>Message</h3>
                <TextField
                    inputRef={focusRef}
                    autoFocus
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                    value={text}
                    type="text"
                    style={{margin: '0 0 20px 0'}}
                    onChange={(e) => setText (e.target.value)}/>
                <Button
                    style={{width: '200px'}}
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={
                        handleSendMessage
                    }>Send Message
                </Button>
            </form>
        </div>
    )
}
export function Message ({author, text}) {
    return <h1>{author}: {text} </h1>;
}