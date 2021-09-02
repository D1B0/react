import {ChatList} from "./chat-list"
import {renderWithRedux} from '../../utils';

let state = null
beforeEach (() => {
    state = {
        conversations: {
            rooms: [{title: "room1", value: ''}, {title: "room2", value: ''}]
        },
        messages: {
            messages: {
                room1: [{author: "Denis", message: "Test"}],
                room2: [{author: "User", message: "TestBot"}]
            }
        }
    }
})
describe ("test chat list", () => {
    it ("should render chat list with store", () => {
        const {container} = renderWithRedux (<ChatList/>, {
            initialState: state
        })
        const elementsFirst = [...container.querySelector ('#room1').querySelectorAll ('.text')]
        const elementsSecond = [...container.querySelector ('#room2').querySelectorAll ('.text')]
        expect (container.querySelector ("#room1")).toHaveTextContent ("room1")
        expect (container.querySelector ("#room2")).toHaveTextContent ("room2")
        expect (elementsFirst[1]).toHaveTextContent ("Denis: Test")
        expect (elementsFirst[2]).toHaveTextContent ("12.30")
        expect (elementsSecond[1]).toHaveTextContent ("User: TestBot")
        expect (elementsSecond[2]).toHaveTextContent ("12.30")
    })
})