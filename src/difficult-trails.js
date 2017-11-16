import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import './difficult-trails.css';

export default class DifficultTrails extends React.Component {

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
                    label="Difficult"
                    onClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onClick={this.handleClose}>Kings Peak</MenuItem>
                    <MenuItem onClick={this.handleClose}>Gull Lake/Lake Mtn.</MenuItem>
                    <MenuItem onClick={this.handleClose}>Moonshine</MenuItem>
                </Drawer>
            </div>
        );
    }
}