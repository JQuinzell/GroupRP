import * as React from 'react'

type SendMessage = (message: string, roomID: string) => void

interface Room {
    name: string
    _id: string
    posts: Post[]
}
interface Post {
    _id: string
    body: string
}

interface Props {
    joinedRoomIDs: string[]
    children: (sendMessage: SendMessage, messages: Room[]) => React.ReactNode
}

interface State {
    rooms: Room[]
    ready: boolean
}

export default class ChatSocket extends React.Component<Props, State> {
    socket: WebSocket = null

    state = {
        rooms: [] as Room[],
        ready: false
    }

    componentWillMount() {
        this.socket = new WebSocket('ws://localhost:5000')
        this.socket.onmessage = this.onSocketMessage
        this.socket.onerror = this.onSocketError
        this.socket.onopen = () => {
            this.props.joinedRoomIDs.forEach(id => {
                const room = {
                    _id: id,
                    name: '',
                    posts: []
                }
                this.setState({ rooms: [...this.state.rooms, room] })
                this.socket.send(
                    JSON.stringify({
                        action: 'JOIN_ROOM',
                        roomID: id
                    })
                )
            })
            this.setState({ ready: true })
        }
    }

    componentWillUnmount() {
        this.socket.close()
    }

    onSocketMessage = (data: MessageEvent) => {
        const message = JSON.parse(data.data)
        const rooms = this.state.rooms
        const i = this.state.rooms.findIndex(room => room._id === message.roomID)
        if (i === -1) {
            console.error('Room not found')
            return
        }
        const newRoom = Object.assign({}, rooms[i], { posts: [...rooms[i].posts, message.post] })
        rooms.splice(i, 1, newRoom)
        this.setState({
            rooms: [...rooms]
        })
    }

    onSocketError(error: Event) {}

    sendMessage = (message: string, roomID: string) => {
        this.socket.send(
            JSON.stringify({
                action: 'SEND_MESSAGE',
                message,
                roomID
            })
        )
    }

    render() {
        if (this.state.ready) {
            return this.props.children(this.sendMessage, this.state.rooms)
        } else {
            return null
        }
    }
}
