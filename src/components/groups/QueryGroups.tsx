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

//TODO: figure out how to properly type
const QueryRooms: React.SFC<{}> = () => (
    <QueryRoomsComponent query={query}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <GroupListing groups={data.groups} />
        }}
    </QueryRoomsComponent>
)
export default QueryRooms