import { observable, ObservableMap, computed } from 'mobx'
import Group from 'models/Group'
import client from 'api/client'
import RoomStore from './RoomStore'
import { resolve } from 'url';

class GroupStore {
    @observable data: ObservableMap<string, Group> = observable.map()
    
    @computed get groups() {
        return Array.from(this.data.values())
    }

    get = (id: string) => {
        return this.data.get(id)
    }

    fetch = (id: string) => {
        return new Promise<Group>((resolve, reject) => {
            const group = this.get(id)

            if(group) return resolve(group)

            client.groups.get(id)
                .then(this.create)
                .then(resolve)
                .catch(reject)
        })
    }

    create = (attrs: any) => {
        const group = new Group(attrs)
        this.data.set(group._id, group)
        group.rooms = group.rooms.map(RoomStore.create)
        return group
    }

    loadGroups = () => {
        return client.groups.all()
            .then(groups => {
                return groups.map(this.create)
            })
    }
}

export default new GroupStore()