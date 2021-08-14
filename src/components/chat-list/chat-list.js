import {List} from "@material-ui/core"
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom"
import {addNewRoom} from '../../store/conversations';
import {Chat} from "./chat"

export const ChatList = () => {
    const rooms = useSelector ((state) => state.conversations.rooms)
    const addRoom = useDispatch ()
    const {roomId} = useParams ()
    return (
        <div>
            <List component="nav">
                {rooms.map ((chat, index) => {
                    return (
                        <Link key={index} to={`/chat/${chat.title}`}>
                            <Chat
                                title={chat.title}
                                selected={roomId === chat.title}

                            />
                        </Link>
                    )
                })}
            </List>
            <button type="button"
                    onClick={() => addRoom (addNewRoom ())}>Add new Room
            </button>
        </div>
    )
}
