import React, {useState} from 'react'
import TodoLogo from '../../../Assets/Images/todo.png'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, CardMedia, Grid } from '@material-ui/core'
import classes from './Cards.css'
import CampaignIcon from '@material-ui/icons/LabelImportantRounded'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const TodoCard = () => {
    let [todos, setTodos]  = useState(["The todos for today will come here."])
    return (
        <Aux>
            <Card className={classes.card}>
                <Grid container>
                    <Grid item xs={9}>
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                Todo
                            </Typography>
                            <List dense={true}>
                                {
                                    todos.map( (aTodo, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <CampaignIcon />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={aTodo}
                                                />
                                            </ListItem>
                                        )
                                    } )
                                }
                            </List>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia image={TodoLogo} title="todo" style={ { height: "115px", marginTop: "45px"} } />
                    </Grid>
                </Grid>
            </Card>
        </Aux>
    )
}

export default TodoCard