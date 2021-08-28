export function getChatList (state) {
    return state.conversations.rooms
}
export function getChatModalShow (state) {
    return state.conversations.addConversationModalShow
}
export function getPending (state) {
    return state.conversations.pending
}
export function getError (state) {
    return state.conversations.error
}
export function getTextValue (room) {
    return (state) => state.conversations.rooms.find (el => el.title === room)?.value || ""
}
export function getEditMessageId (room) {
    return (state) => state.conversations.rooms.find (el => el.title === room)?.id || ""
}