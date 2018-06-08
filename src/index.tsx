import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Playlist from './components/Playlist'
import {initializeStores} from 'stores'
import RoomStore from 'stores/RoomStore'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
})

client
    .query({
        query: gql`
            {
                allAuthors {
                    id
                }
            }
        `
    })
    .then(console.log)

    .catch(err => console.log('wtf'))

initializeStores()

ReactDOM.render(
    <Playlist rooms={RoomStore.rooms} />,
    document.getElementById('app')
)