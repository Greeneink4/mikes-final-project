import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './moderate-trails.css';

export default class ModerateTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <RaisedButton
                    label="Moderate"
                    onClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose}>Jones Hole</MenuItem>
                    <MenuItem onClick={this.handleClose}>Little Hole</MenuItem>
                    <MenuItem onClick={this.handleClose}>Asphalt Ridge</MenuItem>
                    <MenuItem onClick={this.handleClose}>Rojo</MenuItem>
                    <MenuItem onClick={this.handleClose}>Ships</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dinosaur Trackway</MenuItem>
                </Drawer>
            </div>
        );
    }
}