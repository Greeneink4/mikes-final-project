import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import { withRouter } from 'react-router-dom'
import { green500 } from 'material-ui/styles/colors';
import './navigation-bar.css';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

class NavigationBar extends Component {
    render() {
        return (
            <AppBar className="app-bar"
                style={{ backgroundColor: green500 }}
                title={<div className="app-bar-title">Hike Uintah Basin Trails</div>}
                iconElementLeft={<IconMenu
                    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onChange={this.handleRouteNav} 
                >
                    <MenuItem value="1" primaryText="Easy"/>
                    <MenuItem value="2" primaryText="Moderate" />
                    <MenuItem value="3" primaryText="Difficult" />
                </IconMenu>}
                onLeftIconButtonTouchTap={this.handleLeftMenuTouch}
            />
        )
    }

    handleLeftMenuTouch = () => {
        console.log("Thanks for clicking!")
    }

    handleRouteNav = (event, value) => {
        switch (value) {
            case "1":
                this.props.history.push('/easy')
                break;
            case "2":
                this.props.history.push('/moderate')
                break;
            case "3":
                this.props.history.push('/difficult')
                break;
            default:
                this.props.history.push('/easy') 
        }
    }
}


export default withRouter(NavigationBar);