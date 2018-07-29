import {observable} from 'mobx'
import Message from './Message'
import client from 'api/client'

export default class Room {
    _id: string
    @observable name: string
    posts: Message[] = []

    constructor(attrs: any) {
        Object.assign(this, attrs)
    }

    loadPosts() {
        return client.posts.all(this._id)
            .then(posts => posts.map(p => new Message(p)))
            .then(posts => this.posts = posts)
    }
}