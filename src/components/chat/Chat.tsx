import * as React from 'react'
import { Avatar, TextField, WithStyles, createStyles, withStyles, Paper, Typography } from '@material-ui/core'

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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam soluta eligendi ab dolore, enim magnam nulla
                                        quibusdam! Voluptatem obcaecati, voluptatibus accusamus accusantium culpa officiis dolorem incidunt amet
                                        libero quibusdam debitis voluptates, et minima deleniti ab fugiat placeat, esse aliquam eos recusandae? Velit
                                        neque voluptate beatae! Nobis, voluptatibus delectus perferendis quis porro maxime, ab, laudantium beatae
                                        repellendus molestiae ea culpa voluptas quasi doloremque temporibus natus enim accusamus obcaecati recusandae
                                        possimus ipsam dolores ipsum! Perferendis, nisi facere. Ab quo obcaecati dolorum eligendi hic nulla quibusdam
                                        ad, eveniet assumenda dolor impedit laborum a quasi molestiae quam sint, blanditiis similique dolorem nostrum
                                        aut atque? neque voluptate beatae! Nobis, voluptatibus delectus perferendis quis porro maxime, ab, laudantium
                                        beatae repellendus molestiae ea culpa voluptas quasi doloremque temporibus natus enim accusamus obcaecati
                                        recusandae possimus ipsam dolores ipsum! Perferendis, nisi facere. Ab quo obcaecati dolorum eligendi hic nulla
                                        quibusdam ad, eveniet assumenda dolor impedit laborum a quasi molestiae quam sint, blanditiis similique
                                        dolorem nostrum aut atque?
                                    </Typography>
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
