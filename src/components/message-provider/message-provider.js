import {useState, useMemo} from "react"
import {useParams} from "react-router-dom"

export function MessageProvider ({children}) {
    const {roomId} = useParams ()
    const [conversations] = useState ([
        {title: "room1"},
        {title: "room2"}
    ])
    const [messages, setMessages] = useState ({
        room1: [],
        room2: []
    })
    const state = useMemo (() => {
        return {
            conversations,
            allMessages: messages,
            messages: messages[roomId] || [],
            hasRoomById: Object.keys (messages).some ((room) => room === roomId)
        }
    }, [conversations, messages, roomId])
    const actions = useMemo (() => {
        return {
            sendMessage: (message, roomId, user) => {
                let lastMessageSendUser
                if (!localStorage.getItem ('login')) {
                    lastMessageSendUser = "User"
                }
                lastMessageSendUser = localStorage.getItem ('login')
                if (user === "Bot") {
                    lastMessageSendUser = "Bot"
                }
                const newMessage = {id: new Date ().getTime (), author: lastMessageSendUser, message: message.message}
                setMessages ((messages) => {
                    return {
                        ...messages,
                        [roomId]: [...(messages[roomId] || []), newMessage]
                    }
                })
            }
        }
    }, [])
    return children ([state, actions])
}