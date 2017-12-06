import React, { Component } from 'react';
import './moderate.css';
import NavigationBar from './navigation-bar';
import {TrailForm} from './trail-form';


class TrailDetails extends Component {

    constructor(props) {
        debugger
        super(props);

        this.state = {trail: props.location.state.trail};

    }

    render() {
        return (
            <div>
                <NavigationBar />
                <h1>{this.state.trail.name}</h1>
                <img src={this.state.trail.imgSmallMed} alt="The mountains are calling."/>
                <p>Description{this.state.trail.description}</p>
                <p>Difficulty: {this.state.trail.difficulty}</p>
                <p>Type: {this.state.trail.type}</p>
                <p>Longitude: {this.state.trail.longitude}</p>
                <p>Latitude: {this.state.trail.latitude}</p>
                <TrailForm />
            </div>
        )
    }
}

export default TrailDetails;