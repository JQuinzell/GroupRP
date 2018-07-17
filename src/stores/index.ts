import GroupStore from './GroupStore'

export function initializeStores() {
    GroupStore.loadGroups()
}