import * as React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

interface Props {
    groups: Array<{
        _id: string
        name: string
        description: string
    }>
    onGroupSelected: (id: string) => void
}

export default class GroupListing extends React.Component<Props, {}> {
    render() {
        const groups = this.props.groups

        return (
            <List>
                {groups.map(group => (
                    <ListItem key={group._id} button onClick={() => this.props.onGroupSelected(group._id)}>
                        <ListItemText inset>{group.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        )
    }
}
