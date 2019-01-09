import * as React from 'react'
import { Avatar, WithStyles, createStyles, withStyles, Paper, Typography } from '@material-ui/core'
import ChatInput from './ChatInput'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import ROOM_QUERY from 'queries/room'

const styles = createStyles({
    input: {
        padding: 15
    },
    item: {},
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    avatar: {
        float: 'left',
        marginRight: 20,
        shapeOutside: 'circle(50%)',
        width: 75,
        height: 75
    },
    messageContainer: {
        overflow: 'auto'
    },
    messages: {},
    message: {
        margin: '15px 0',
        padding: 15,
        overflow: 'auto'
    },
    text: {
        display: 'inline'
    },
    boldText: {
        display: 'inline',
        lineHeight: 0
    }
})

interface Props extends WithStyles<typeof styles> {
    room: {
        _id: string
        name: string
        posts: Array<{
            _id: string
            body: string
        }>
    }
}

const mutation = gql`
    mutation post($body: String!, $room: String!) {
        post(input: { body: $body, room: $room }) {
            _id
            body
        }
    }
`

interface Data {
    post: {
        _id: string
    }
}

interface Variables {
    body: string
    room: string
}

class PostMutation extends Mutation<Data, Variables> {}

class Chat extends React.Component<Props> {
    render() {
        const room = this.props.room
        const posts = room.posts
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.messageContainer}>
                    <div className={classes.messages}>
                        {posts.map(post => (
                            <div className={classes.item} key={post._id}>
                                <Paper className={classes.message}>
                                    <Avatar
                                        className={classes.avatar}
                                        src="https://i.kinja-img.com/gawker-media/image/upload/s--4LHBt0O4--/c_scale,f_auto,fl_progressive,q_80,w_800/kaprfadz9rnvypesa2u9.png"
                                    />
                                    <Typography variant="h6" classes={{ root: classes.boldText }}>
                                        Username:{' '}
                                    </Typography>
                                    <Typography variant="body1" classes={{ root: classes.text }}>
                                        {post.body}
                                    </Typography>
                                </Paper>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <PostMutation
                        mutation={mutation}
                        update={(cache, { data: { post } }) => {
                            cache.writeQuery({
                                query: ROOM_QUERY,
                                data: {
                                    room: {
                                        ...room,
                                        posts: [...room.posts, post]
                                    }
                                }
                            })
                        }}
                    >
                        {post => <ChatInput onSubmit={body => post({ variables: { body, room: room._id } })} />}
                    </PostMutation>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Chat)
