import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatListing from './ChatListing'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
    id: string
}

interface Props extends RouteComponentProps<MatchParams> {    
}

const query = gql`
query($id: String!){
    group(id: $id) {
        _id
        name
        description
        rooms {
            _id
            name
        }
    }
}
`

//TODO: figure out how to properly type
const QueryRoom: React.SFC<any> = ({match}) => (
    <Query query={query} variables={{id: match.params.id}}>
        {({loading, data, error}) => {
            if(loading || error) {
                return null
            }
            return <ChatListing group={data.group} rooms={data.group.rooms} />
        }}
    </Query>
)
export default QueryRoom