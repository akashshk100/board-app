import React, { Component} from 'react'
import TimeLogo from '../../../Assets/Images/time.png'
import Aux from '../../../hoc/Auxilliary/Auxilliary'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import classes from './Cards.css'
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class HopingCard extends Component{
    
    date = new Date()
    constructor(){
        super()
        this.state = {
            hour: this.date.getHours(),
            minutes: this.date.getMinutes(),
            seconds: this.date.getSeconds(),
            hopIn: false,
            open: false,
            verificationPassword: null,
            showPassword: false
        }
        setInterval(() => {
            this.date = new Date()
            this.setState({
                hour: this.date.getHours(),
                minutes: this.date.getMinutes(),
                seconds: this.date.getSeconds()
            })
        }, 1000)
    }

    handlePasswordChange = (event) => {
        this.setState({
            verificationPassword: event.target.value 
        })
        console.log(this.state.verificationPassword)
    }

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    handleClose = () => {
        this.setState({
            hopIn: true,
            open: false
        })
    }

    hopIn = () => {
        this.setState({
            hopIn: false,
            open: (this.state.hopIn)?false:true
        })
    }

    getAMPM = (time) => {
        if(time>12) return "PM"
        else return "AM"
    }

    render = () => {
        return (
            <Aux>
                <Card className={classes.hopingCard}>
                    <Grid container>
                        <Grid item xs={3}>
                            <CardMedia image={TimeLogo} title="ancmnt" style={ { height: "115px", marginTop: "10px"} } />
                        </Grid>
                        <Grid item xs={9}>
                            <CardContent>
                                <Typography gutterBottom variant="subtitle1">
                                    {this.date.toDateString()}
                                </Typography>
                                <div style={{marginTop: "15px"}}>
                                    <Grid container spacing={4}>
                                        <Grid item style={{margin: "auto"}}>
                                            <div>
                                                <Typography variant="caption" align="center">Current Time</Typography>
                                                <Typography variant="h5" align="center">
                                                    {String((this.date.getHours()>12)?this.date.getHours()-12:this.date.getHours()).padStart(2, '0')}:{String(this.state.minutes).padStart(2, '0')}
                                                    <Typography variant="caption" align="center">:{String(this.state.seconds).padStart(2, '0')+" "+this.getAMPM(this.state.hour)}</Typography>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <Grid item style={{margin: "auto"}}>
                                            <Button size="small" variant="contained" color={(this.state.hopIn)?"secondary":"primary"} style={{marginTop: "12px", outline:"0px"}} onClick={this.hopIn}>
                                                <Typography variant="caption" align="center">{ (this.state.hopIn)?"hop-out":"hop-in" }</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>

                <Dialog open={this.state.open} onClose={()=>{}}>
                    <DialogContent>
                        <DialogContentText>
                            Please Enter Password
                        </DialogContentText>
                        <FormControl variant="outlined" size="small" required={true}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.verificationPassword}
                            onChange={this.handlePasswordChange}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                style={{outline: "0px"}}
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                edge="end"
                                >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} variant="contained" size="small" style={{outline: "0px"}} color="primary">
                        Done
                    </Button>
                    </DialogActions>
                </Dialog>

            </Aux>
        )
    }
}
    

export default HopingCard