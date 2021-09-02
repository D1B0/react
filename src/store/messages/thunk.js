import {db} from '../../api/firebase';
import {getDataConversations} from '../conversation';
import {addMessageFB, errorAction, startAction, successAction} from './actions';

export const getAllMessageList = () => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").get ().then ((snapshot) => {
            const messages = {}
            snapshot.forEach ((snap) => {
                messages[snap.key] = []
            })
            dispatch (addMessageFB (messages))
            dispatch (successAction ())
        })
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const addMessageList = () => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("messages")
          .get ()
          .then ((snapshot) => {
              const messages = {}
              snapshot.forEach ((snap) => {
                  messages[snap.key] = Object.values (snap.val ())
              })
              dispatch (addMessageFB (messages))
              dispatch (successAction ())
          })
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const sendMessage = (message, roomId) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("messages")
          .child (roomId)
          .child (message.id)
          .set (message)
        dispatch (addMessageList ())
        dispatch (successAction ())
    } catch (error) {
        dispatch (errorAction (error))
    }
}
export const deleteRoomChatMessagesFB = (title) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("messages").child (title).remove ()
        dispatch (successAction ())
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const deleteMessageFB = (room, id) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("messages").child (room).child (id).remove ()
        dispatch (getAllMessageList ())
        dispatch (addMessageList ())
        dispatch (successAction ())
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const handleChangeAfterSendFB = (room) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").child (room).update ({title: room, value: ""})
        db.ref ("conversation").child (room).child ("id").remove ()
        dispatch (getDataConversations ())
        dispatch (successAction ())
    } catch (error) {
        dispatch (errorAction (error))
    }
}
export const startEditMessageFB = (room, text, id_message) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").child (room).update ({title: room, value: text, id: id_message})
        dispatch (getDataConversations ())
        dispatch (successAction ())
    } catch (error) {
        dispatch (errorAction (error))
    }
}
export const sendEditMessageFB = (message, room, id) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("messages").child (room).child (id).update (message)
        dispatch (addMessageList ())
        dispatch (successAction ())
    } catch (error) {
        dispatch (errorAction (error))
    }
}

