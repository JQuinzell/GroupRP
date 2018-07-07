import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ChatRoom from './components/ChatRoom'
import {initializeStores} from 'stores'
import RoomStore from 'stores/RoomStore'

initializeStores()

ReactDOM.render(
    <ChatRoom />,
    document.getElementById('app')
)