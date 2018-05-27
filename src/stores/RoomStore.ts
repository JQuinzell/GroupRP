import {observable, ObservableMap} from 'mobx'
import Room from 'models/Room'

export default class RoomStore {
    @observable roomMap: ObservableMap<string, Room> = observable.map()
}