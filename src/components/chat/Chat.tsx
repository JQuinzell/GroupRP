import * as React from 'react'
import { TextField, WithStyles, createStyles, withStyles, Grid, Paper, Typography } from '@material-ui/core'

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
    messageContainer: {
        overflow: 'auto'
    },
    messages: {},
    message: {
        marginTop: 16,
        padding: 15
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
                                    <Typography variant="body1">{post.body}</Typography>
                                </Paper>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <TextField className={classes.input} multiline rows={3} fullWidth label="Chat" />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Chat)
