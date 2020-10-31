import React, {useState} from 'react'
import AnnouncementLogo from '../../../Assets/Images/announcement.png'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Card from '@material-ui/core/Card'
import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import classes from './Cards.css'
import CampaignIcon from '@material-ui/icons/LabelImportantRounded'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const AnnouncementCard = () => {
    let [announcements, setAnnouncements]  = useState(["The Announcement to be made will come here."])

    return (
        <Aux>
            <Card className={classes.card}>
                <Grid container>
                    <Grid item xs={9}>
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                Announcements
                            </Typography>
                            
                            <List dense={true}>
                                {
                                    announcements.map( (anAnnouncement, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <CampaignIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={anAnnouncement}
                                                />
                                            </ListItem>
                                        )
                                    } )
                                }
                            </List>
                            
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia image={AnnouncementLogo} title="ancmnt" style={ { height: "115px", marginTop: "45px"} } />
                    </Grid>
                </Grid>
            </Card>
        </Aux>
    )
}

export default AnnouncementCard