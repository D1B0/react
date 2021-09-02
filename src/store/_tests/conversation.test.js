import {
    addRoom,
    deleteRoom,
    editRoom,
    errorAction,
    GET_CONVERSATIONS,
    handleChangeValue,
    roomReducer, showModalWindow, startAction, successAction
} from '../conversation';

describe ("room reducer", () => {
    it ("add room", () => {
        const state = roomReducer (
            {rooms: []},
            addRoom ("room4")
        )
        expect (state.rooms.length).toBe (1)
        expect (state.rooms[0].title).toBe ("room4")
        expect (state.rooms[0]).toHaveProperty ("value", "")
    })
    it ('remove room by name', () => {
        const state = roomReducer (
            {rooms: [{title: "room4", value: ""}]},
            deleteRoom ("room4")
        )
        expect (state.rooms.length).toBe (0)
    })
    it ('edit room name', () => {
        const state = roomReducer (
            {rooms: [{title: "room4", value: ""}]},
            editRoom ("room4", "room5")
        )
        expect (state.rooms[0].title).toBe ("room5")
    })
    it ('handle change value', () => {
        const state = roomReducer (
            {rooms: [{title: "room4", value: ""}]},
            handleChangeValue ("room4", "test")
        )
        expect (state.rooms[0].value).toBe ("test")
    })
    it ("get rooms", () => {
        const state = roomReducer (
            {rooms: []},
            {type: GET_CONVERSATIONS, payload: [1, 2, 3, 4]}
        )
        expect (state.rooms).toEqual ([1, 2, 3, 4])
    })
    it ('test error', () => {
        const state = roomReducer (
            {error: null},
            errorAction ("test")
        )
        expect (state.error).toBe ("test")
    })
    it ('test pending', () => {
        const state = roomReducer (
            {pending: false},
            startAction ()
        )
        expect (state.pending).toBe (true)
    })
    it ('test pending2', () => {
        const state = roomReducer (
            {pending: true},
            successAction ()
        )
        expect (state.pending).toBe (false)
    })
    it ('show modal window', () => {
        const state = roomReducer (
            {addConversationModalShow: false},
            showModalWindow ()
        )
        expect (state.addConversationModalShow).toBe (true)
    })
    it ("default conversation", () => {
        const state = roomReducer ({
            rooms: 1
        }, [])
        expect (state.rooms).toBe (1)
    })
})