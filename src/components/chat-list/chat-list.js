import {List} from "@material-ui/core"
import {useSelector} from 'react-redux';
import {useParams} from "react-router-dom"
import {getChatList} from '../../store/conversations';
import {Chat} from "./chat"
import {ChatAdder} from './chat-adder';
import {ChatModal} from './chat-modal';

export const ChatList = () => {
    const rooms = useSelector (getChatList)
    const {roomId} = useParams ()
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
            <ChatAdder/>
            <ChatModal/>
        </div>
    )
}
