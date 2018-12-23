import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Routes from './routes'
import { client } from 'api/client'
import { ApolloProvider } from 'react-apollo'

ReactDOM.render(
    <ApolloProvider client={client}>
        <CssBaseline />
        <Routes />
    </ApolloProvider>,
    document.getElementById('app')
)
