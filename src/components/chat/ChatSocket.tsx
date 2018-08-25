import * as React from 'react'

type SendMessage = (message: string, roomID: string) => void

interface Message {
    body: string
}

interface Props {
    joinedRoomIDs: string[]
    children: (sendMessage: SendMessage, messages: Message[]) => React.ReactNode
}

interface State {
    messages: Message[]
}

export default class ChatSocket extends React.Component<Props, State> {
    socket: WebSocket = null
    
    state = {
        messages: []
    }

    componentDidMount() {
        this.socket = new WebSocket('ws://localhost:5000')
        this.socket.onmessage = this.onSocketMessage
        this.socket.onerror = this.onSocketError
        this.socket.onopen = () => {
            this.props.joinedRoomIDs.forEach(id => {
                this.socket.send(JSON.stringify({
                    action: 'JOIN_ROOM',
                    roomID: id
                }))
            })
        }
    }

    componentWillUnmount() {
        this.socket.close()
    }

    onSocketMessage = (data: MessageEvent) => {
        const message = JSON.parse(data.data)
        this.setState({
            messages: [...this.state.messages, message]
        })
    }

    onSocketError(error: Event) {
        console.log(error)
    }

    sendMessage = (message: string, roomID: string) => {
        this.socket.send(JSON.stringify({
            action: 'SEND_MESSAGE',
            message,
            roomID
        }))
    }

    render() {
        return this.props.children(this.sendMessage, this.state.messages)
    }
}