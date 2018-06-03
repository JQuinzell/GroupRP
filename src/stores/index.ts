import {fake} from 'faker'
import { create as createRoom } from 'mocks/rooms'
import { create as createMessage } from 'mocks/messages'
import RoomStore from 'stores/RoomStore'
import Room from 'models/Room'
import MessageStore from './MessageStore';

export function initializeStores() {
    for(let i = 0; i < 3; i++) {
        let room = createRoom({})
        room = RoomStore.create(room)
        for(let j = 0; j < 10; j++) {
            const message = createMessage({})
            MessageStore.create(message, room)
        }
    }
}