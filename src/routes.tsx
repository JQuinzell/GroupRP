import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GroupListing from 'components/groups/GroupListing'
import ChatRoom from 'components/ChatRoom'

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={GroupListing} />
                <Route path="/chat" component={ChatRoom} />
            </div>
        </Router>
    )
}