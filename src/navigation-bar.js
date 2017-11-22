import React from 'react';
import AppBar from 'material-ui/AppBar';
import { green500 } from 'material-ui/styles/colors';
import './navigation-bar.css';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */



const NavigationBar = () => (
    <AppBar className="app-bar"
            style={{backgroundColor: green500}}
            title={<div className="app-bar-title">Hike Uintah Basin Trails</div>}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);


export default NavigationBar;