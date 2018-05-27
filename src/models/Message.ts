import {observable} from 'mobx'
import Model from 'models/Model'

export default class Message extends Model {
    id: string
    userID: string
    username: string
    @observable body: string
}