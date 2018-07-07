import RoomStore from 'stores/RoomStore'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

export function initializeStores() {
    const client = new ApolloClient({
        uri: 'http://localhost:3000/graphql'
    })

    client
        .query({
            query: gql`
            {
                rooms {
                    _id
                    name
                    posts {
                        _id
                        body
                    }
                }
            }
        `
        })
        .then((resp: any) => {
            console.log(resp.data.rooms)
            resp.data.rooms.forEach(RoomStore.create)
        })

        .catch(err => console.log(err))

}