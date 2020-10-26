import React from 'react'
import TodoLogo from '../../Assets/todo.png'
import Aux from '../../hoc/Auxilliary/Auxilliary'
import Card from '@material-ui/core/Card'
import { CardContent, Typography, CardMedia, Grid } from '@material-ui/core'
import classes from './Card.css'


const TodoCard = () => {
    // console.log(classes)
    return (
        <Aux>
            <Card className={classes.card}>
                <Grid container>
                    <Grid item xs={9}>
                        <CardContent>
                            <Typography gutterBottom variant="subtitle1">
                                Todo
                            </Typography>
                            <Typography variant="body2" component="p" style={{marginTop: "10px"}}>
                                The most recent todo's will come here.
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={3}>
                        <CardMedia image={TodoLogo} title="todo" style={ { height: "125px", marginTop: "35px"} } />
                    </Grid>
                </Grid>
            </Card>
        </Aux>
    )
}

export default TodoCard