import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EasyTrails from './easy-trails';
import ModerateTrails from './moderate-trails';
import DifficultTrails from './difficult-trails';
import NavigationBar from './navigation-bar';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="navigation-bar">
                    <NavigationBar/>
                </div>
                    {/*<div className="header">*/}
                        {/*<h1>Uintah Basin Trails Project</h1>*/}
                    {/*</div>*/}
                    <div className="trails-contain">
                        <div><EasyTrails/></div>
                        <div><ModerateTrails/></div>
                        <div><DifficultTrails/></div>
                    </div>
                <div className="footer">
                    <h2>This is my footer.</h2>
                </div>
            </MuiThemeProvider>
        );
     }
    }



