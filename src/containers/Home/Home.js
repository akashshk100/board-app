import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import AnnouncementCard from '../../components/Cards/AnnouncementCard'
import TodoCard from '../../components/Cards/TodoCard'
import HopingCard from '../Cards/HopingCard'

class Home extends Component{
    render(){
        return (
            <Grid container spacing={3}>
                <Grid item md={8} sm={12}>
                    <Grid container style={{margin: "auto",  marginTop: "25px"}}> 
                        <AnnouncementCard></AnnouncementCard>
                    </Grid>
                    <Grid container style={{margin: "auto",  marginTop: "25px"}}> 
                        <TodoCard />
                    </Grid>
                </Grid>
                <Grid item md={4}>
                    <Grid container style={{margin: "auto", marginTop: "25px"}}> 
                        <HopingCard />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home