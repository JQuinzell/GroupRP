import * as React from 'react'
import { Query } from 'react-apollo'
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

interface Data {
    room: {
        _id: string
        name: string
        posts: Array<{ _id: string, body: string}>
    }
}

interface Variables {
    id: string
}

class QueryChatComponent extends Query<Data, Variables> {}

const QueryChat: React.SFC<Props> = ({ match }) => (
    <QueryChatComponent query={query} variables={{ id: match.params.room }}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <ChatRoom room={data.room} />
        }}
    </QueryChatComponent>
)

export default QueryChat