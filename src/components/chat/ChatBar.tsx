import * as React from 'react'
import Post from 'data/post'
import './styles/ChatBar.scss'

interface Room {
    name: string
    posts: Post[]
}

interface Props {
    rooms: Room[]
    selectedRoom: string
    selectTab: (tab: string) => void
    sendMessage: (message: string) => void
}

interface State {
    message: string
}

export default class ChatBar extends React.Component<Props, State> {
    state = {
        message: ''
    }

    chatboxRef = React.createRef<HTMLDivElement>()

    handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.handleSubmit()
        }
    }

    handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({
            message: e.currentTarget.value
        })
    }

    handleSubmit = () => {
        const message = this.state.message
        this.setState({ message: '' })
        this.props.sendMessage(message)
    }

    moveScrollBarToBottom = () => {
        this.chatboxRef.current.scrollTop = this.chatboxRef.current.scrollHeight
    }

    componentDidMount() {
        this.moveScrollBarToBottom()
    }

    componentDidUpdate() {
        this.moveScrollBarToBottom()
    }

    render() {
        const selectedRoom = this.props.rooms.find(room => room.name === this.props.selectedRoom)

        return (
            <div className="ChatBar">
                <div className="tabs">
                    {this.props.rooms.map(room => (
                        <div
                            className={room.name === this.props.selectedRoom ? 'selected tab' : 'tab'}
                            onClick={() => this.props.selectTab(room.name)}
                            key={room.name}
                        >
                            {room.name}
                        </div>
                    ))}
                </div>
                <div ref={this.chatboxRef} className="messages">
                    {selectedRoom.posts.map(post => (
                        <div key={post._id} className="message">
                            <span className="username">{post.username}:</span>
                            {post.body}
                        </div>
                    ))}
                </div>
                <textarea value={this.state.message} placeholder="Type here ..." onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
            </div>
        )
    }
}
