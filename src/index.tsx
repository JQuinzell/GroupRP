import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {initializeStores} from 'stores'
import GroupStore from 'stores/GroupStore'
import RoomStore from 'stores/RoomStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes'
import 'components/global/styles/CardListing.scss'

initializeStores()
.then(() => {
    ReactDOM.render(
        <Provider
            GroupStore={GroupStore}
            RoomStore={RoomStore}>
            <React.Fragment>
                <CssBaseline />
                <Routes />
            </React.Fragment>
        </Provider>,
        document.getElementById('app')
    )
})