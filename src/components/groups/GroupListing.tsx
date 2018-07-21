import * as React from 'react'
import { inject, observer } from "mobx-react";
import Group from 'models/Group'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './styles/GroupListing.scss'

@inject("GroupStore")
@observer
export default class GroupListingWrapper extends React.Component<any, any> {
    render() {
        return <GroupListing groups={this.props.GroupStore.groups} />
    }
}

interface Props {
    groups: Group[]
}

@observer
class GroupListing extends React.Component<Props, {}> {
    render() {
        const groups = this.props.groups
        console.log(groups)
        console.log(groups.length && groups[0].description)
        return (
            <div className="groups-listing">
                <Typography align="center" variant="display2">
                    Groups
                </Typography>
                
                <div className="groups">
                {groups.map((group, i) => (
                    <Card key={i} className="group-item">
                        <CardContent>
                            <Typography variant="title">
                                {group.name}
                            </Typography>
                            
                            <Typography variant="body1">
                                {group.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        )
    }
}