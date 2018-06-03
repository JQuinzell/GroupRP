import { fake } from 'faker'

const messages = new Map<string, any>()

export function create(attrs: any) {
    const id = fake("{{random.uuid}}")
    attrs.id = id
    attrs.body = attrs.body || fake("{{lorem.sentence}}")
    messages.set(id, attrs)
    return messages.get(id)
}

export function index() {
    return messages.values()
}