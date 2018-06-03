import {fake} from 'faker'

const rooms = new Map<string, any>()

export function create(attrs: any) {
    const id = fake("{{random.uuid}}")
    attrs.id = id
    attrs.name = attrs.name || fake("{{lorem.word}}")
    rooms.set(id, attrs)
    return rooms.get(id)
}

export function index() {
    return rooms.values()
}