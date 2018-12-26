import * as React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

interface Props {
    rooms: Array<{
        _id: string
        name: string
    }>
    onRoomSelected: (id: string) => void
}

export default class GroupListing extends React.Component<Props, {}> {
    render() {
        const rooms = this.props.rooms

        return (
            <List>
                {rooms.map(room => (
                    <ListItem key={room._id} button onClick={() => this.props.onRoomSelected(room._id)}>
                        <ListItemText inset>{room.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        )
    }
}
