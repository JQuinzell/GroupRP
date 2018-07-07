import { observable, action } from 'mobx'
import Room from 'models/Room'
import RoomStore from './RoomStore'

class UIStore {
    @observable currentRoom: Room = null

    @action loadRoom() {
        this.currentRoom = RoomStore.rooms[0]
    }
}

export default new UIStore()