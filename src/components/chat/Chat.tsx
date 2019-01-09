import * as React from 'react'
import { Avatar, WithStyles, createStyles, withStyles, Paper, Typography } from '@material-ui/core'
import ChatInput from './ChatInput'

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
        name: string
        posts: Array<{
            _id: string
            body: string
        }>
    }
}

class Chat extends React.Component<Props> {
    render() {
        const posts = this.props.room.posts
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
                    <ChatInput />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Chat)
