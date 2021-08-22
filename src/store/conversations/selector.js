export function getChatList (state) {
    return state.conversations.rooms
}
export function getChatModalShow (state) {
    return state.conversations.addConversationModalShow
}
export function getChatName (state) {
    return state.conversations.nameRoom
}
