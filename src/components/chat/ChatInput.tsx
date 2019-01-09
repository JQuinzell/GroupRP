import * as React from 'react'
import { TextField, WithStyles, createStyles, withStyles } from '@material-ui/core'

const styles = createStyles({
    input: {
        padding: 15
    }
})

interface Props extends WithStyles<typeof styles> {}

interface State {
    body: string
}

class ChatInput extends React.Component<Props, State> {
    state = {
        body: ''
    }

    addNewLine = () => {
        this.setState(state => ({
            body: state.body + '\n'
        }))
    }

    handleSubmit = () => {
        this.setState({ body: '' })
    }

    handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (e.ctrlKey) {
                this.addNewLine()
            } else {
                this.handleSubmit()
            }
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const body = e.target.value
        this.setState({ body })
    }

    render() {
        const { classes } = this.props
        return (
            <TextField
                className={classes.input}
                onKeyDown={this.handleKeyDown}
                onChange={this.handleChange}
                value={this.state.body}
                multiline
                rows={3}
                fullWidth
                label="Chat"
            />
        )
    }
}

export default withStyles(styles)(ChatInput)
