import {observable, ObservableMap, computed} from 'mobx'
import Room from 'models/Room'
import MessageStore from './MessageStore'

class RoomStore {
    @observable data: ObservableMap<string, Room> = observable.map()

    @computed get rooms(): Room[] {
        return Array.from(this.data.values())
    }

    create = (attrs: any) => {
        const room = new Room(attrs)
        this.data.set(room._id, room)
        return room
    }
}

export default new RoomStore()