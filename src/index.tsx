import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import {initializeStores} from 'stores'
import GroupStore from 'stores/GroupStore'
import RoomStore from 'stores/RoomStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './routes'
import {client} from 'api/client'
import { ApolloProvider } from 'react-apollo'

import 'components/global/styles/CardListing.scss'

initializeStores()

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider
            GroupStore={GroupStore}
            RoomStore={RoomStore}>
            <React.Fragment>
                <CssBaseline />
                <Routes />
            </React.Fragment>
        </Provider>
    </ApolloProvider>,
    document.getElementById('app')
)