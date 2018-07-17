import { observable, ObservableMap, computed } from 'mobx'
import Group from 'models/Group'
import client from 'api/client'

class GroupStore {
    @observable data: ObservableMap<string, Group> = observable.map()
    
    @computed get groups() {
        return Array.from(this.data.values())
    }

    create = (attrs: any) => {
        const group = new Group(attrs)
        this.data.set(group._id, group)
        return group
    }

    loadGroups() {
        return client.groups.all()
            .then(groups => {
                return groups.map(this.create)
            })
    }
}

export default new GroupStore()