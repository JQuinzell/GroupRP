import gql from 'graphql-tag'

export default gql`
    query($id: String!) {
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
