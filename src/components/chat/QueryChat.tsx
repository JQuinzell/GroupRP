import * as React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router-dom'
import ChatRoom from './ChatRoom'

interface MatchParams {
    room: string
}

interface Props extends RouteComponentProps<MatchParams> {
}

const query = gql`
query($id: String!){
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
    post(input: { body: $body, room: $room}) {
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
        posts: Array<{ _id: string, body: string}>
    }
}

interface QueryVariables {
    id: string
}


class QueryChatComponent extends Query<QueryData, QueryVariables> {}
class MutationChatComponent extends Mutation<MutationData, MutationVariables> {}

const QueryChat: React.SFC<Props> = ({ match }) => (
    <MutationChatComponent mutation={mutation}>
        {(sendMessage) => (
            <QueryChatComponent query={query} variables={{ id: match.params.room }}>
                {({ loading, data, error }) => {
                    if (loading || error) {
                        return null
                    }
                    return <ChatRoom 
                        room={data.room} 
                        sendMessage={(body, room) => { sendMessage({variables: {body, room}})}} />
                }}
            </QueryChatComponent>
        )}
    </MutationChatComponent>
)

export default QueryChat