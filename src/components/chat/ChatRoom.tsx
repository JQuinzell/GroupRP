import * as React from 'react'
import './styles/ChatRoom.scss'

export default class ChatRoom extends React.Component<any, {}> {

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
                        <h3>{message.username}</h3>:
                        <p>{message.body}</p>
                    </div>
                ))}
            </div>
            <textarea placeholder="Type here ..."></textarea>
        </div>
        )
    }
}