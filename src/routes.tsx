import * as React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import GroupListing from 'components/groups/GroupListing'

export default () => {
    return (
        <Router>
            <Route exact path="/" component={GroupListing} />
        </Router>
    )
}