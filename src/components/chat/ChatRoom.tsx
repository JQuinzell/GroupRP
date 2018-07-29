import * as React from 'react'
import './styles/ChatRoom.scss'
import Room from 'models/Room'
import Message from 'models/Message'
import {observer, inject} from 'mobx-react'
import RoomStore from 'stores/RoomStore'

interface Props {
    messages: Message[]
}

interface State {
    selectedRoom: Room
}

@inject('GroupStore')
@observer
export default class ChatRoomWrapper extends React.Component<any, any> {
    state = {
        room: null
    }

    componentWillMount() {
        const {GroupStore} = this.props
        const groupID = this.props.match.params.group
        const roomID = this.props.match.params.room

        GroupStore.fetch(groupID)
            .then(group => group.getRoom(roomID))
            .then(room => {
                room.loadPosts()
                this.setState({ room })
            })
            .catch(console.log)
    }

    render() {
        const room = this.state.room
        return (
            room && <ChatRoom room={room} />
        )
    }
}

@observer
export class ChatRoom extends React.Component<any, {}> {

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