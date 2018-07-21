import * as React from 'react'
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom'
import Room from 'models/Room'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

@inject("RoomStore")
@observer
export default class RoomListingWrapper extends React.Component<any, any> {
    render() {
        console.log(this.props.match.params.id)
        return <RoomListing rooms={this.props.RoomStore.rooms} />
    }
}

interface Props {
    rooms: Room[]
}

@observer
class RoomListing extends React.Component<Props, {}> {
    render() {
        const rooms = this.props.rooms

        return (
            <div className="Rooms-listing">
                <Typography align="center" variant="display2">
                    Rooms
                </Typography>

                <div className="Rooms">
                    {rooms.map((room, i) => (
                        <Card key={i} className="Room-item">
                            <CardContent>
                                <Typography variant="title">
                                    <Link to="/chat">{room.name}</Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}