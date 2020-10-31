import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import AnnouncementCard from './Cards/AnnouncementCard'
import TodoCard from './Cards/TodoCard'
import HopingCard from './Cards/HopingCard'

class Home extends Component{
    render(){
        return (
            <div style={{width: "inherit"}}>
                <Grid container>
                    <Grid item md={8} xs={12}>
                        <Grid container style={{marginTop: "25px"}}> 
                            <AnnouncementCard></AnnouncementCard>
                        </Grid>
                        <Grid container style={{marginTop: "25px"}}> 
                            <TodoCard />
                        </Grid>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Grid container style={{marginTop: "25px"}}> 
                            <HopingCard />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home