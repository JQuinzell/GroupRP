import * as React from 'react'
import '../styles/playlist.scss'
import Room from 'models/Room'
import Message from 'models/Message'

interface Props {
    rooms: Room[]
    messages: Message[]
}

interface State {}


export default class Playlist extends React.Component<any, State> {
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
                    {this.props.rooms.map((room: any) => (
                        <option key={room.id} value={room.id}>{room.name}</option>
                    ))}
                </select>
            </div>
            <div className="messages">
                {this.props.messages.map((message: any, i: number) => (
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