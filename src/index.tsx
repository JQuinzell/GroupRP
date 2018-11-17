import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './routes'
import { client } from 'api/client'
import { ApolloProvider } from 'react-apollo'

import 'components/global/styles/CardListing.scss'

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.Fragment>
            <CssBaseline />
            <Routes />
        </React.Fragment>
    </ApolloProvider>,
    document.getElementById('app')
)
