import * as React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import GroupListing from './GroupListing'

const query = gql`
    query {
        groups {
            _id
            name
            description
        }
    }
`

interface Data {
    groups: Array<{
        _id: string
        name: string
        description: string
    }>
}
class QueryRoomsComponent extends Query<Data, {}> {}

interface Props {
    onGroupSelected: (id: string) => void
}

const QueryRooms: React.SFC<Props> = ({ onGroupSelected }) => (
    <QueryRoomsComponent query={query}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <GroupListing onGroupSelected={onGroupSelected} groups={data.groups} />
        }}
    </QueryRoomsComponent>
)
export default QueryRooms
