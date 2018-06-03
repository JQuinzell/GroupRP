import * as React from 'react'
import '../styles/playlist.scss'
import Room from 'models/Room'
import Message from 'models/Message'

interface Props {
    rooms: Room[]
    messages: Message[]
}

interface State {
    selectedRoom: Room
}


export default class Playlist extends React.Component<any, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            selectedRoom: props.rooms[0]
        }
    }

    selectRoom = (e: any) => {
        const index = e.target.value
        this.setState({
            selectedRoom: this.props.rooms[index]
        })
    }

    render() {
        let messages = this.state.selectedRoom.messages

        return (
        <div className="chatbox">
            <div className="title">
                <h1>Title</h1>
                <div className="spacer"></div>
                    <select name="text" onChange={this.selectRoom}>
                    {this.props.rooms.map((room: Room, i: number) => (
                        <option key={room.id} value={i}>{room.name}</option>
                    ))}
                </select>
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