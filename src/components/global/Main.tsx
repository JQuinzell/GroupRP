import * as React from 'react'
import Chat from 'components/chat/Chat'
import Drawer from '@material-ui/core/Drawer'
import Person from '@material-ui/icons/Person'
import Grid from '@material-ui/core/Grid'
import { withStyles, createStyles, WithStyles, List, ListSubheader, ListItem, AppBar, Typography } from '@material-ui/core'
import { Switch, Route } from 'react-router'

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
interface State {}

class Main extends React.Component<Props, State> {
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
                            <List subheader={<ListSubheader>Joined Groups</ListSubheader>}>
                                {[1, 2, 3].map(i => (
                                    <ListItem key={i} button>
                                        Group {i}
                                    </ListItem>
                                ))}
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
