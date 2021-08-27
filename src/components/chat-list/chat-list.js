import {List} from "@material-ui/core"
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from "react-router-dom"
import {
    getChatList,
    getDataConversations,
    showModalWindow,
    getPending,
    getError
} from '../../store/conversation';
import {getAllMessageList, addMessageList} from '../../store/messages';
import {Chat} from "./chat"
import {ChatAdder} from './chat-adder';
import {ChatModal} from './chat-modal';

export const ChatList = () => {
    const rooms = useSelector (getChatList)
    const {roomId} = useParams ()
    const dispatch = useDispatch ()
    const pending = useSelector (getPending)
    const error = useSelector (getError)
    const isOpen = useCallback (() => {
        dispatch (showModalWindow ())
    }, [dispatch])
    useEffect (() => {
        dispatch (getDataConversations ())
        dispatch (getAllMessageList ())
        dispatch (addMessageList ())
    }, [dispatch])
    const closeModal = useCallback (() => {
        dispatch (showModalWindow ())
    }, [dispatch])
    if (pending) {
        return (<div>
            Pending.....
        </div>)
    }
    if (error) {
        return (<div>
            Oooopps something wrong.Error: {error}
        </div>)
    }
    return (
        <div>
            <List component="nav">
                {rooms.map ((chat, index) => {
                    return (
                        <div key={index}>
                            <Chat
                                title={chat.title}
                                selected={roomId === chat.title}
                            />
                        </div>
                    )
                })}
            </List>
            <ChatAdder isOpen={isOpen}/>
            <ChatModal
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </div>
    )
}
