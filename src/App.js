import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import './App.css';


   
export default class App extends Component {
    render() {
        return (
            <div>
               <div className= 'heading'>
                <NavigationBar />
                    <div className= 'sub-heading'>
                            <h2>A project to highlight the world class hiking trails in the Uintah Basin.</h2>
                        <div className= 'middle-content'>
                        <div className= 'quote'>
                        <div className= 'bottom-content'>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>  
            </div>  
                
        );
    }
}


