import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <div className="navigation-menu">
                <NavigationBar/>
            </div>


                //     <div className="trails-contain">
                //         <div><EasyTrails/></div>
                //         <div><ModerateTrails/></div>
                //         <div><DifficultTrails/></div>
                //     </div>
                // <div className="footer">
                //     <h2>This is my footer.</h2>
                // </div>
        );
    }
}

