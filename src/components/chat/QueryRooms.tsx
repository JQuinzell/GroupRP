import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ChatListing from './ChatListing'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps<{id: string}> {    
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

interface Data {
    group: {
        _id: string
        name: string
        description: string
        rooms: Array<{ _id: string, name: string }>
    }
}

interface Variables {
    id: string
}

class QueryRoomsComponent extends Query<Data, Variables> {} 

//TODO: figure out how to properly type
const QueryRooms: React.SFC<Props> = ({match}) => (
    <QueryRoomsComponent query={query} variables={{id: match.params.id}}>
        {({loading, data, error}) => {
            if(loading || error) {
                return null
            }
            return <ChatListing group={data.group} rooms={data.group.rooms} />
        }}
    </QueryRoomsComponent>
)
export default QueryRooms