import {List} from "@material-ui/core"
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom"
import {addNewRoom, deleteRoom} from '../../store/conversations';
import {Chat} from "./chat"

export const ChatList = () => {
    const rooms = useSelector ((state) => state.conversations.rooms)
    const dispatch = useDispatch ()
    const {roomId} = useParams ()
    return (
        <div>
            <List component="nav">
                {rooms.map ((chat, index) => {
                    return (
                        <div style={{color: "white", cursor: "pointer"}}
                             key={index}
                             title={chat.title}
                             onClick={() => dispatch (deleteRoom (chat.title))}>X
                            <Link to={`/chat/${chat.title}`}>
                                <Chat
                                    title={chat.title}
                                    selected={roomId === chat.title}

                                />
                            </Link></div>
                    )
                })}
            </List>
            <input type="text"/>
            <button type="button"
                    onClick={() => dispatch (addNewRoom ())}>Add new Room
            </button>
        </div>
    )
}
