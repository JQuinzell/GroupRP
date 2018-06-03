import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Playlist from './components/Playlist'
import {initializeStores} from 'stores'
import RoomStore from 'stores/RoomStore'

initializeStores()

ReactDOM.render(
    <Playlist rooms={RoomStore.rooms} />,
    document.getElementById('app')
)