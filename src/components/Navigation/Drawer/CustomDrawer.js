import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import HomeIcon from '@material-ui/icons/Home'
import ProjectIcon from '@material-ui/icons/AccountTree'
import OrganizationIcon from '@material-ui/icons/LocationCity'
import TodoIcon from '@material-ui/icons/FormatListBulleted'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import {Link} from 'react-router-dom'


const CustomDrawer = (props) => {
    return(
        <Aux>
            <SwipeableDrawer
                anchor="left"
                open={props.drawerOpen}
                onClose={() => {props.toggleDrawer(false)}}
                onOpen={() => {props.toggleDrawer(true)}}
            >
                <Toolbar variant="dense">
                    <Typography variant="h6" style={{margin: "auto"}}>
                        Keka
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    <ListItem button style={{margin: "10px auto"}} onClick={() => { props.toggleDrawer(false) }}>
                        <Link to="/" style={{display: "flex", textDecoration: "none"}}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText secondary="Home" />
                        </Link>
                    </ListItem>
                    <ListItem button style={{margin: "10px auto"}} onClick={() => { props.toggleDrawer(false) }}>
                        <Link to="/me" style={{display: "flex", textDecoration: "none"}}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText secondary="Me" />
                        </Link>
                    </ListItem>
                    <ListItem button style={{margin: "10px auto"}} onClick={() => { props.toggleDrawer(false) }}>
                    <Link to="/organization" style={{display: "flex", textDecoration: "none"}}>
                        <ListItemIcon>
                            <OrganizationIcon />
                        </ListItemIcon>
                        <ListItemText secondary="Org." />
                    </Link>
                    </ListItem>
                    <Link to="/todo" style={{display: "flex", textDecoration: "none"}}>
                        <ListItem button style={{margin: "10px auto"}} onClick={() => { props.toggleDrawer(false) }}>
                            <ListItemIcon>
                                <TodoIcon />
                            </ListItemIcon>
                            <ListItemText secondary="Todo" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem button style={{margin: "10px auto"}} onClick={() => { props.toggleDrawer(false) }}>
                        <Link to="/" style={{display: "flex", textDecoration: "none"}}>
                            <ListItemIcon>
                                <ProjectIcon />
                            </ListItemIcon><br />
                            <ListItemText secondary="Project Board" />
                        </Link>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </Aux>
    )
    
}

export default CustomDrawer