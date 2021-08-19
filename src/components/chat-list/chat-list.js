import {List} from "@material-ui/core"
import {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory, useParams} from "react-router-dom"
import {addNewRoom, deleteRoom} from '../../store/conversations';
import {Chat} from "./chat"

export const ChatList = () => {
    const roomSelector = (state) => {return state.conversations.rooms}
    const rooms = useSelector (roomSelector)
    const [newRoom, setNewRoom] = useState ('')
    const {push} = useHistory ()
    const dispatch = useDispatch ()
    const {roomId} = useParams ()
    const deleteRooms = useCallback ((room) => {
        push ('/chat')
        dispatch (deleteRoom (room))
    }, [dispatch, push])
    return (
        <div>
            <List component="nav">
                {rooms.map ((chat, index) => {
                    return (
                        <div key={index}>
                            <button type="button" style={{color: "black", cursor: "pointer"}}
                                    onClick={() => deleteRooms (chat.title)}
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
                    onClick={() => {
                        if (newRoom) {
                            dispatch (addNewRoom (newRoom))
                            setNewRoom ('')
                        }
                    }}>Add new Room
            </button>
        </div>
    )
}
