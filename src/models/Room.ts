import {observable} from 'mobx'
import Message from './Message'

export default class Room {
    _id: string
    @observable name: string
    messages: Message[] = []

    constructor(attrs: any) {
        Object.assign(this, attrs)
    }
}