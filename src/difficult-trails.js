import React from 'react';
import Paper from 'material-ui/Paper'
import { Menu } from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem';
import NavigationBar from './navigation-bar';

export default class DifficultTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});
        // TODO: get trail by trailId
        // route to TrailDetails and pass the trail info through a prop

        render() {
            const style = {
                display: 'inline-block',
                margin: '200px auto',
                background: 'lightgreen',
    
            };
            return (
                <div>
                    <NavigationBar />
                    <Paper style={style}>
                        <Menu>
                            <MenuItem onClick={this.handleClose}>Kings Peak</MenuItem>
                            <MenuItem onClick={this.handleClose}>Gull Lake/Lake Mtn.</MenuItem>
                            <MenuItem onClick={this.handleClose}>Moonshine</MenuItem>
                        </Menu>
                    </Paper>    
                </div>
            );
        }
    }