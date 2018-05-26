import * as React from 'react'
import '../styles/playlist.scss'

interface Room {
    id: string
    name: string
}

interface Message {
    username: string
    body: string
}

interface Props {
    rooms: Room[]
    messages: Message[]
}

interface State {}


export default class Playlist extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
        <div className="chatbox">
            <div className="title">
                <h1>Title</h1>
                <div className="spacer"></div>
                <select name="text">
                    {this.props.rooms.map(room => (
                        <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                </select>
            </div>
            <div className="messages">
                {this.props.messages.map((message, i) => (
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