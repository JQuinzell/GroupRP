import Post from './post'

export default interface Room {
    _id: string
    name: string
    posts: Array<Post>
}