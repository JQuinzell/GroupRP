import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatBar from './ChatBar'
import ChatSocket from './ChatSocket'

interface Props {}

const query = gql`
    query($ids: [String]!) {
        rooms(ids: $ids) {
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
    rooms: Array<{
        _id: string
        name: string
        posts: Array<{ _id: string; body: string }>
    }>
}

interface QueryVariables {
    ids: string[]
}

class QueryChatComponent extends Query<QueryData, QueryVariables> {}
const room = '5b4fc986339b513b5466dfda'

interface Props {}
interface State {
    rooms: any
}

export default class QueryChatBar extends React.Component {
    render() {
        return (
            <ChatSocket joinedRoomIDs={[room]}>
                {(sendMessage, rooms) => (
                    <QueryChatComponent query={query} variables={{ ids: [room] }}>
                        {({ loading, data, error }) => {
                            if (loading || error) {
                                return null
                            }
                            return (
                                <ChatBar rooms={data.rooms} selectTab={() => null} selectedRoom={room} sendMessage={msg => sendMessage(msg, room)} />
                            )
                        }}
                    </QueryChatComponent>
                )}
            </ChatSocket>
        )
    }
}
