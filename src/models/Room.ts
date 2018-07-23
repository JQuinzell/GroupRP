import {observable} from 'mobx'
import Message from './Message'

export default class Room {
    _id: string
    @observable name: string
    posts: Message[] = []

    constructor(attrs: any) {
        Object.assign(this, attrs)
    }
}