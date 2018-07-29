import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GroupListing from 'components/groups/GroupListing'
import ChatRoom from 'components/chat/ChatRoom'
import ChatListing from 'components/chat/ChatListing'

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={GroupListing} />
                <Route exact path="/groups/:id/rooms" component={ChatListing} />
                <Route exact path="/groups/:group/rooms/:room" component={ChatRoom} />
            </div>
        </Router>
    )
}