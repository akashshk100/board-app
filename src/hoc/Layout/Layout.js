import React from 'react'
import Aux from '../Auxilliary/Auxilliary'

const Layout = (props) => {
    return(
        <Aux>
            <div>sidebar, navbar, toggler</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout