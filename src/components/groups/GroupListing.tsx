import * as React from 'react'
import { inject, observer } from "mobx-react";
import Group from 'models/Group'
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
        return (
            <ul className="groups-listing">
                {groups.map((group, i) => (
                    <li key={i}>
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                    </li>
                ))}
            </ul>
        )
    }
}