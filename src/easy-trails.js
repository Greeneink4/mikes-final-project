import React from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getTrailByLatLon from './services/get-trails'
import NavigationBar from './navigation-bar';
import './easy-trails.css';
import { Menu } from 'material-ui/Menu';


export default class EasyTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = (getTrail) => this.setState({ open: false });
    
    getTrail = () => {
        console.log(getTrailByLatLon(37.4283453, -110.9884326))
        //   lat: 37.4283453,
        // lon: -110.9884326,
    }

    render() {
        const style = {
            display: 'inline-block',
            margin: '16px 32px 16px 0',
        };
        return (
            <div>
                <NavigationBar /> 

                <Paper style={style}>
                <Menu>
                    <MenuItem onClick={this.handleClose}>The Sound of Silence</MenuItem>
                    <MenuItem onClick={this.handleClose}>The Old Ski Tow</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dry Fork Rock Art</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dry Fork Flume</MenuItem>
                    <MenuItem onClick={this.handleClose}>Coyote Gulch</MenuItem>
                    <MenuItem onClick={this.handleClose}>Eagle Ridge</MenuItem>
                    <MenuItem onClick={this.handleClose}>Desert Voices</MenuItem>
                    <MenuItem onClick={this.handleClose}>Split Mountain Scenic</MenuItem>
                    </Menu>
                </Paper>    
            </div>
        );
    }
}