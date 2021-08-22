export function getMessageList (state) {
    return state.messages.messages
}
export function getMessageListByTitle (title) {
    return (state) => state.messages.messages[title]
}
export function getTextMessage (state) {
    return state.messages.textMessage
}
export function getIsEdit (state) {
    return state.messages.isEdit
}
export function getEditId (state) {
    return state.messages.editId
}