import {List} from "@material-ui/core"
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from "react-router-dom"
import {addNewRoom, deleteRoom} from '../../store/conversations';
import {Chat} from "./chat"

export const ChatList = () => {
    const rooms = useSelector ((state) => state.conversations.rooms)
    const [newRoom, setNewRoom] = useState ('')
    const dispatch = useDispatch ()
    const {roomId} = useParams ()
    return (
        <div>
            <List component="nav">
                {rooms.map ((chat, index) => {
                    return (
                        <div key={index}>
                            <button type="button" style={{color: "black", cursor: "pointer"}}
                                    onClick={() => dispatch (deleteRoom (chat.title))}
                            >close {chat.title}
                            </button>
                            <Link to={`/chat/${chat.title}`}>
                                <Chat
                                    title={chat.title}
                                    selected={roomId === chat.title}

                                />
                            </Link>
                        </div>
                    )
                })}
            </List>
            <input type="text"
                   value={newRoom}
                   onChange={e => setNewRoom (e.target.value)}
            />
            <button type="button"
                    onClick={() => dispatch (addNewRoom (newRoom))}>Add new Room
            </button>
        </div>
    )
}
