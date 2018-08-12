import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteComponentProps } from 'react-router-dom'
import ChatRoom from './ChatRoom'

interface MatchParams {
    id: string
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

//TODO: figure out how to properly type
const QueryChat: React.SFC<any> = ({ match }) => (
    <Query query={query} variables={{ id: match.params.room }}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <ChatRoom room={data.room} />
        }}
    </Query>
)
export default QueryChat