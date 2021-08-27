import {db} from '../../api/firebase';
import {startAction, successAction, errorAction, getConversation, refreshStoreConversation} from './actions';

export const addNewRoom = (name) => async (dispatch) => {
    try {
        dispatch (startAction ())
        await db.ref ("conversation").child (name).set ({title: name, value: ""})
        dispatch (getDataConversations ())
        dispatch (successAction ())
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const getDataConversations = () => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").get ()
          .then ((snapshot) => {
              const conversations = []
              snapshot.forEach ((snap) => {
                  conversations.push (snap.val ())
              })
              dispatch (getConversation (conversations))
              dispatch (successAction ())
          })
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const deleteRoomChatFB = (title) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").child (title).remove ()
        dispatch (getDataConversations ())
        dispatch (successAction ())
    } catch
        (error) {
        dispatch (errorAction (error))
    }
}
export const handleChangeFB = (room, text) => (dispatch) => {
    try {
        dispatch (startAction ())
        db.ref ("conversation").child (room).update ({title: room, value: text})
        dispatch (getDataConversations ())
        dispatch (successAction ())
    } catch (error) {
        dispatch (errorAction (error))
    }
}






