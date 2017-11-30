import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import getTrailByLatLon from './services/get-trails'
import './easy-trails.css';
import './easy-trails.css';


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
        return (
            <div>
                <RaisedButton
                    label="Easy"
                    onClick={this.handleToggle}
                />

                {/*<RaisedButton*/}
                    {/*label="GetTrailData"*/}
                    {/*onClick={this.getTrail}*/}
                {/*/>*/}


                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose}>The Sound of Silence</MenuItem>
                    <MenuItem onClick={this.handleClose}>The Old Ski Tow</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dry Fork Rock Art</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dry Fork Flume</MenuItem>
                    <MenuItem onClick={this.handleClose}>Coyote Gulch</MenuItem>
                    <MenuItem onClick={this.handleClose}>Eagle Ridge</MenuItem>
                    <MenuItem onClick={this.handleClose}>Desert Voices</MenuItem>
                    <MenuItem onClick={this.handleClose}>Split Mountain Scenic</MenuItem>
                </Drawer>
            </div>
        );
    }
}