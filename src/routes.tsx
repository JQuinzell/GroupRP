import * as React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main from './components/global/Main'
import QueryRooms from "components/chat/QueryRooms"
import QueryChat from "components/chat/QueryChat"
import QueryChatBar from "components/chat/QueryChatBar"

export default () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main} />
                <Route exact path="/groups/:id/rooms" component={QueryRooms} />
                <Route exact path="/groups/:group/rooms/:room" component={QueryChat} />
                <Route exact path="/chatbar" component={QueryChatBar} />
            </div>
        </Router>
    )
}
