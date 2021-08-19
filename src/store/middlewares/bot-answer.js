import {addMessage} from '../messages/actions'
import {ADD_NEW_MESSAGE} from '../messages/types'

export const botAnswer = (store) => (next) => (action) => {
    if (action.type === ADD_NEW_MESSAGE && action.payload.message.author !== "Bot") {
        setTimeout (() => {
            store.dispatch (addMessage ({
                    id: new Date ().getTime (),
                    author: "Bot",
                    message: `Hello ${action.payload.message.author}`
                },
                action.payload.roomId
            ))
        }, 1500)
    }
    return next (action)
}