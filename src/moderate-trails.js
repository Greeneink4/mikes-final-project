import React from 'react';
import Paper from 'material-ui/Paper'
import MenuItem from 'material-ui/MenuItem';
import { Menu } from 'material-ui/Menu'
import './moderate.css';

export default class ModerateTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        const style = {
            display: 'inline-block',
            margin: '200px auto',
            background: 'lightgreen',

        };
        return (
            <div>
                <Paper style={style}>
                    <Menu>
                    <MenuItem onClick={this.handleClose}>Jones Hole</MenuItem>
                    <MenuItem onClick={this.handleClose}>Little Hole</MenuItem>
                    <MenuItem onClick={this.handleClose}>Asphalt Ridge</MenuItem>
                    <MenuItem onClick={this.handleClose}>Rojo</MenuItem>
                    <MenuItem onClick={this.handleClose}>Ships</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dinosaur Trackway</MenuItem>
                    <MenuItem onClick={this.handleClose}>Handsome Cabin Boy</MenuItem>
                    </Menu>
                </Paper>    
            </div>
        );
    }
}