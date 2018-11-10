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

interface Props extends WithStyles<typeof styles> {}

class Chat extends React.Component<Props> {
    render() {
        const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.messageContainer}>
                    <div className={classes.messages}>
                        {messages.map(i => (
                            <div className={classes.item} key={i}>
                                <Paper className={classes.message}>
                                    <Typography variant="body1">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe, repudiandae consectetur distinctio, illum
                                        corporis accusamus officiis itaque placeat inventore beatae doloremque laudantium blanditiis non reiciendis
                                        nostrum. Reprehenderit eveniet assumenda officia nulla culpa quis, a quas ex tempore non, et ratione hic ipsa
                                        perspiciatis nobis quam libero possimus cum sequi voluptates iure quos nesciunt illo voluptate. Itaque in
                                        assumenda quis modi optio, eius consequuntur provident molestias expedita dolorem porro asperiores nihil dicta
                                        quaerat ex sapiente. Quibusdam ea assumenda inventore eaque! Cupiditate ipsum reprehenderit ut aperiam a
                                        deserunt ipsam atque iure autem fugiat? Dolore, commodi assumenda magni magnam fugit ipsam labore!
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
