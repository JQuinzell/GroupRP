import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import QueryGroups from 'components/groups/QueryGroups'
import ChatRoom from 'components/chat/ChatRoom'
import QueryRooms from 'components/chat/QueryRooms'

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={QueryGroups} />
                <Route exact path="/groups/:id/rooms" component={QueryRooms} />
                <Route exact path="/groups/:group/rooms/:room" component={ChatRoom} />
            </div>
        </Router>
    )
}