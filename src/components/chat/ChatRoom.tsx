import * as React from 'react'
import '../../styles/ChatRoom.scss'
import Room from 'models/Room'
import Message from 'models/Message'
import {observer} from 'mobx-react'
import RoomStore from 'stores/RoomStore'

interface Props {
    messages: Message[]
}

interface State {
    selectedRoom: Room
}

@observer
export default class ChatRoomWrapper extends React.Component<any, any> {
    render() {
        const room = RoomStore.rooms[0] || null

        return (
            room && <ChatRoom room={room} />
        )
    }
}

@observer
export class ChatRoom extends React.Component<any, {}> {

    render() {
        let messages = this.props.room.messages

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