import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import QueryGroups from 'components/groups/QueryGroups'
import QueryRooms from 'components/chat/QueryRooms'
import QueryChat from 'components/chat/QueryChat'

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={QueryGroups} />
                <Route exact path="/groups/:id/rooms" component={QueryRooms} />
                <Route exact path="/groups/:group/rooms/:room" component={QueryChat} />
            </div>
        </Router>
    )
}