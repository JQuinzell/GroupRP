import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {initializeStores} from 'stores'
import GroupListing from 'components/groups/GroupListing'
import GroupStore from 'stores/GroupStore'
import CssBaseline from '@material-ui/core/CssBaseline';

initializeStores()

ReactDOM.render(
    <Provider
        GroupStore={GroupStore}>
        <React.Fragment>
            <CssBaseline />
            <GroupListing />
        </React.Fragment>
    </Provider>,
    document.getElementById('app')
)