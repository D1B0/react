import {useState} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

export const ChatList = () => {
    const [chat] = useState ([
            {id: 1, name: "JoJo fans"},
            {id: 2, name: "Naruto fans"},
            {id: 3, name: "Gachimuchi fans"}
        ]
    )
    return <div>

        <List>
            {chat.map (chat =>
                <ListItem key={chat.id}
                          button>
                    <ListItemText primary={chat.name}

                                  text={chat.name}/>
                </ListItem>
            )}
        </List>

    </div>
}