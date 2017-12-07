import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import {TrailForm} from './trail-form';
// import {HttpLink} from './index';
import './trail-details.css';

class TrailDetails extends Component {

    constructor(props) {
        debugger
        super(props);

        this.state = {trail: props.location.state.trail};

    }

    updateHikedTrail = () => {
        //update database
    }

    updateComments = () => {
        //update database
    }


    render() {
        return (
            <div>
                <NavigationBar />
                <div className= 'trail-details'>
                    <h1>{this.state.trail.name}</h1>
                    <img src={this.state.trail.imgSmallMed} alt=" "/>
                    <p><strong>{this.state.trail.summary}</strong></p>
                    <p>Difficulty: {this.state.trail.difficulty}</p>
                    <p>Stars: {this.state.trail.stars}</p>
                    <p>Location: {this.state.trail.location}</p>
                    <p>Length: {this.state.trail.length}</p>
                    <p>Low: {this.state.trail.high}</p>
                    <p>High: {this.state.trail.low}</p>
                    <TrailForm updateHikedTrail={this.updateHikedTrail} updateComments={this.updateComments} />
                </div>
            </div>
        )
    }
}

export default TrailDetails;