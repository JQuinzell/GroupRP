import { observable, ObservableMap } from 'mobx'
import Message from 'models/Message'
import Room from 'models/Room'

class MessageStore {
    @observable data: ObservableMap<string, Message> = observable.map()

    create(attrs: any, room: Room) {
        const message = new Message(attrs)
        this.data.set(message.id, message)
        message.room = room
        room.messages.push(message)
        return message
    }
}

export default new MessageStore()