import * as React from 'react'
import { Link } from 'react-router-dom'
import Group from 'models/Group'
import { List, ListItem, ListItemText } from '@material-ui/core'

interface Props {
    groups: Array<{
        _id: string
        name: string
        description: string
    }>
}

export default class GroupListing extends React.Component<Props, {}> {
    render() {
        const groups = this.props.groups

        return (
            <List>
                {groups.map(group => (
                    <ListItem key={group._id} button>
                        <ListItemText inset>{group.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        )
    }
}
