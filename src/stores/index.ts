import GroupStore from './GroupStore'

export async function initializeStores() {
    await GroupStore.loadGroups()
}