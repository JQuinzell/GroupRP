import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatRoom from './ChatRoom'
import ChatSocket from './ChatSocket'

interface Props {}

const query = gql`
    query($id: String!) {
        room(id: $id) {
            _id
            name
            posts {
                _id
                body
            }
        }
    }
`

const mutation = gql`
    mutation($body: String!, $room: String!) {
        post(input: { body: $body, room: $room }) {
            _id
        }
    }
`

interface MutationData {
    _id: string
}

interface MutationVariables {
    body: string
    room: string
}

interface QueryData {
    room: {
        _id: string
        name: string
        posts: Array<{ _id: string; body: string }>
    }
}

interface QueryVariables {
    id: string
}

class QueryChatComponent extends Query<QueryData, QueryVariables> {}
const room = '5b4fc986339b513b5466dfda'
const QueryChatBar: React.SFC<Props> = () => (
    <ChatSocket joinedRoomIDs={[room]}>
        {(sendMessage, messages) => {
            console.log('Testing chat socket')
            return <h1>hello</h1>
        }}
    </ChatSocket>
)

export default QueryChatBar
