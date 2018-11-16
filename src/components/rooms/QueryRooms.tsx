import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import RoomListing from './RoomListing'

const query = gql`
    query($id: String!) {
        group(id: $id) {
            rooms {
                _id
                name
            }
        }
    }
`

interface Data {
    group: {
        rooms: Array<{
            _id: string
            name: string
        }>
    }
}

interface Variables {
    id: string
}

class QueryRoomsComponent extends Query<Data, Variables> {}

interface Props {
    groupId: string
    onRoomSelected: (id: string) => void
}

const QueryRooms: React.SFC<Props> = ({ onRoomSelected, groupId }) => (
    <QueryRoomsComponent query={query} variables={{ id: groupId }}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <RoomListing onRoomSelected={onRoomSelected} rooms={data.group.rooms} />
        }}
    </QueryRoomsComponent>
)
export default QueryRooms
