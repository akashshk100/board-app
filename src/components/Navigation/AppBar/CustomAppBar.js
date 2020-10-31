import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/PowerSettingsNew'
import VpnKey from '@material-ui/icons/VpnKey'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const drawerWidth = 135;

const CustomAppBar = (props) => {
    
    const [anchorEle, setAnchorEl] = useState(null);
    const open = Boolean(anchorEle);
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <Aux>
            <AppBar position="static" color="primary" style={{boxShadow: "none"}}>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" style={{outline: "0px"}} onClick={ () => {props.toggleDrawer(true)} }>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow: "1", margin: "0px 10px"}}>
                        Keka
                    </Typography>
                    <div style={{marginRight: "10px"}}>
                        <Typography variant="body2">
                            {props.userName}
                        </Typography>
                    </div>
                    <div>
                        <Avatar onClick={handleMenu} style={{width: "25px", height: "25px"}}>
                        </Avatar>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEle}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} style={{margin: "10px auto"}}>
                                <ListItemIcon>
                                    <PersonIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText secondary="My Profile" />
                            </MenuItem>
                            <MenuItem onClick={handleClose} style={{margin: "10px auto"}}>
                                <ListItemIcon>
                                    <VpnKey fontSize="small" />
                                </ListItemIcon>
                                <ListItemText secondary="Change Password" />
                            </MenuItem>
                            <MenuItem onClick={handleClose} style={{margin: "10px auto"}}>
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText secondary="Logout" />
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Aux>
    )
    
}

export default CustomAppBar 