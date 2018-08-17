import * as React from 'react'
import './styles/ChatRoom.scss'

interface Props {
    room: {
        _id: string
        posts: Array<{
            // username: string
            body: string
        }>
    }

    sendMessage: (message: string, roomID: string) => void
}

interface State {
    message: string
}

export default class ChatRoom extends React.Component<Props, State> {
    state = {
        message: ''
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter') {
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
        this.props.sendMessage(message, this.props.room._id)
    }

    moveScrollBarToBottom = (div: HTMLDivElement) => {
        //don't know if this will account for messages appearing in scroll box
        div.scrollTop = div.scrollHeight
    }

    render() {
        let messages = this.props.room.posts

        return (
        <div className="chatbox">
            <div className="title">
                <h1>Title</h1>
            </div>
            <div ref={this.moveScrollBarToBottom} className="messages">
                {messages.map((message: any, i: number) => (
                    <div key={i} className="message">
                        <img className="avatar" src="avatar.jpg" alt="Avatar" />
                        <h3>Username</h3>:
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>
            <textarea placeholder="Type here ..." value={this.state.message} onKeyDown={this.handleKeyDown} onChange={this.handleChange}></textarea>
        </div>
        )
    }
}