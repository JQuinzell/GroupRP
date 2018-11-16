import * as React from 'react'
import Chat from 'components/chat/Chat'
import Drawer from '@material-ui/core/Drawer'
import Person from '@material-ui/icons/Person'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import { withStyles, createStyles, WithStyles, List, ListSubheader, ListItem, AppBar, Typography, ListItemText, Collapse } from '@material-ui/core'
import { Switch, Route } from 'react-router'
import GroupListing from 'components/groups/QueryGroups'

const drawerWidth = 300
const appBarHeight = 75

const styles = createStyles({
    appBar: {
        height: appBarHeight
    },
    content: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        position: 'relative',
        height: '100vh',
        overflow: 'hidden'
    },
    page: {
        padding: '0 30px',
        height: `calc(100% - ${appBarHeight}px)`,
        overflow: 'hidden'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    container: {
        paddingTop: 20
    },
    userIcon: {
        width: 75,
        height: 75,
        color: 'white'
    },
    userIconCell: {
        borderRadius: '100%',
        background: '#379096',
        padding: 5
    },
    lists: {
        alignSelf: 'stretch'
    }
})

interface Props extends WithStyles<typeof styles> {}
interface State {
    openJoinedGroups: boolean
    selectedGroupId: string
}

class Main extends React.Component<Props, State> {
    state = {
        openJoinedGroups: true,
        selectedGroupId: null
    }

    toggleJoinedGroups = () => {
        this.setState({
            openJoinedGroups: !this.state.openJoinedGroups
        })
    }

    selectGroup = (id: string) => {
        this.setState({
            selectedGroupId: id
        })
    }

    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} variant="permanent">
                    <Grid container alignItems="center" direction="column" className={classes.container}>
                        <Grid className={classes.userIconCell} item>
                            <Person className={classes.userIcon} />
                        </Grid>
                        <Grid item className={classes.lists}>
                            <List>
                                <ListItem button onClick={this.toggleJoinedGroups}>
                                    <ListItemText>Joined Groups</ListItemText>
                                    {this.state.openJoinedGroups ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={this.state.openJoinedGroups}>
                                    <GroupListing onGroupSelected={this.selectGroup} />
                                </Collapse>
                            </List>
                        </Grid>
                    </Grid>
                </Drawer>
                <div className={classes.content}>
                    <AppBar className={classes.appBar} position="static">
                        <Typography variant="h3">Group RP</Typography>
                    </AppBar>
                    <div className={classes.page}>
                        <Switch>
                            <Route path="/" component={Chat} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Main)
