import React from 'react';
import AppBar from 'material-ui/AppBar';
import './navigation-bar.css';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const NavigationBar = () => (
    <AppBar className="app-bar"
            title={<div className="app-bar-title">Hike Uintah Basin Trails</div>}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
);


export default NavigationBar;