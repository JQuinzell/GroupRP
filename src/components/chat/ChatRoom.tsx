import * as React from 'react'
import './styles/ChatRoom.scss'

interface Props {
    room: {
        posts: Array<{
            // username: string
            body: string
        }>
    }
}
export default class ChatRoom extends React.Component<Props, {}> {

    render() {
        let messages = this.props.room.posts

        return (
        <div className="chatbox">
            <div className="title">
                <h1>Title</h1>
            </div>
            <div className="messages">
                {messages.map((message: any, i: number) => (
                    <div key={i} className="message">
                        <img className="avatar" src="avatar.jpg" alt="Avatar" />
                        <h3>Username</h3>:
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>
            <textarea placeholder="Type here ..."></textarea>
        </div>
        )
    }
}