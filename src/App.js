import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import EasyTrails from './easy-trails';
import ModerateTrails from './moderate-trails';
import DifficultTrails from './difficult-trails';
import Quote from './quote';
import './App.css';


export default class App extends Component {
    render() {
        return (
             <div className="navigation-menu">
                   <NavigationBar/>
                 <hr/>
                 <div className="easy">
                     <EasyTrails/>
                 </div>
                 <div className="moderate">
                     <ModerateTrails/>
                 </div>
                 <div className="difficult">
                     <DifficultTrails/>
                 </div>
               <div>
                   <Quote/>
               </div>
                 </div>
        );
    }
}

