import * as React from 'react'
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom'
import Group from 'models/Group'
import Room from 'models/Room'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface Props {
    group: Group
    rooms: Room[]
}

export default class RoomListing extends React.Component<Props, {}> {
    render() {
        const {rooms, group} = this.props
        return (
            <div className="card-listing">
                <Typography align="center" variant="display2">
                    Rooms
                </Typography>

                <div className="cards">
                    {rooms.map((room, i) => (
                        <Card key={i} className="card">
                            <CardContent>
                                <Typography variant="title">
                                    <Link to={`/groups/${group._id}/rooms/${room._id}`}>{room.name}</Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }
}