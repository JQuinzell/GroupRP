import {observable} from 'mobx'
import Model from 'models/Model'

export default class Room extends Model {
    id: string
    @observable name: string
}