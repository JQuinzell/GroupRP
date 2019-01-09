import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router-dom'
import Chat from './Chat'
import ChatSocket from './ChatSocket'
import query from 'queries/room'

interface MatchParams {
    room: string
}

interface Props extends RouteComponentProps<MatchParams> {}

const idQuery = gql`
    {
        selectedRoomId @client
    }
`

interface idQueryData {
    selectedRoomId: string
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
class QueryIdComponent extends Query<idQueryData, {}> {}

const QueryChat: React.SFC<Props> = () => (
    <QueryIdComponent query={idQuery}>
        {({ loading, data, error }) => {
            if (loading || error || !data.selectedRoomId) {
                return null
            }
            return (
                <QueryChatComponent query={query} variables={{ id: data.selectedRoomId }}>
                    {({ loading, error, data }) => {
                        if (loading || error) {
                            return null
                        }
                        return <Chat room={data.room} />
                    }}
                </QueryChatComponent>
            )
        }}
    </QueryIdComponent>
)

export default QueryChat
