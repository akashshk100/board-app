import React, { useState } from 'react'
import Aux from '../../hoc/Auxilliary/Auxilliary'
import CustomAppBar from '../Navigation/AppBar/CustomAppBar'
import CustomDrawer from '../Navigation/Drawer/CustomDrawer'

const Layout = (props) => {

    let [drawerOpen, setDrawerOpen] = useState(false)

    function toggleDrawer(open){
        setDrawerOpen(open)
    }

    return(
        <Aux>
            <CustomAppBar userName={props.userName} toggleDrawer={toggleDrawer}></CustomAppBar>
            
            <CustomDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} ></CustomDrawer>
                
            <main>
                {props.children}
            </main>
                
        </Aux>
    )
}

export default Layout