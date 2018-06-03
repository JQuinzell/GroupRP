import { observable } from 'mobx'
import Room from './Room'

export default class Message {
    id: string
    @observable body: string
    room: Room

    constructor(attrs: any) {
        Object.assign(this, attrs)
    }
}