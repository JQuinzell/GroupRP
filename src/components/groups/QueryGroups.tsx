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

//TODO: figure out how to properly type
const QueryRooms: React.SFC<{}> = () => (
    <Query query={query}>
        {({ loading, data, error }) => {
            if (loading || error) {
                return null
            }
            return <GroupListing groups={data.groups} />
        }}
    </Query>
)
export default QueryRooms