import {addMessage} from '../messages/actions'
import {ADD_NEW_MESSAGE} from '../messages/types'

export const botAnswer = (store) => (next) => (action) => {
    if (action.type === ADD_NEW_MESSAGE && action.payload.author !== "Bot") {
        setTimeout (() => {
                store.dispatch (addMessage (
                        "Bot",
                        action.payload.roomId,
                        `Hello ${action.payload.author}`
                    )
                )
            }, 1500
        )
    }
    return next (action)
}