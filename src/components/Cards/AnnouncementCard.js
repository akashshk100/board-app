import React from 'react'
import AnnouncementLogo from '../../Assets/announcement.png'
import Aux from '../../hoc/Auxilliary/Auxilliary'
import Card from '@material-ui/core/Card'
import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import classes from './Card.css'


const AnnouncementCard = () => {
    // console.log(classes)
    return (
        <Aux>
            <Card className={classes.card}>
                <Grid container>
                    <Grid item xs={9}>
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                Announcements
                            </Typography>
                            <Typography variant="body2" component="p" style={{marginTop: "10px"}}>
                                The Announcement to be made will come here.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia image={AnnouncementLogo} title="ancmnt" style={ { height: "125px", marginTop: "35px"} } />
                    </Grid>
                </Grid>
            </Card>
        </Aux>
    )
}

export default AnnouncementCard