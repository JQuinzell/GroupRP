import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {initializeStores} from 'stores'
import GroupListing from 'components/groups/GroupListing'
import GroupStore from 'stores/GroupStore'

initializeStores()

ReactDOM.render(
    <Provider
        GroupStore={GroupStore}>
        <GroupListing />
    </Provider>,
    document.getElementById('app')
)