import React, { Component } from 'react';
import './moderate.css';


class TrailDetails extends Component {

    constructor(props) {
        super(props);

        props.trailInfo.trailName = 'Handsome Cabin Boy';
        props.trailInfo.longitude = '-9.46758384';
        props.trailInfo.latitude = '23.445859735';
        props.trailInfo.trailDescription = 'Jeff farts alot on this trail, so beware of foul smells.';
    }

    render() {
        return (
            <div>
                <h1>{this.props.trailInfo.trailName}</h1>
                <p>{this.props.trailInfo.trailDescription}</p>
                <p>Longitude: {this.props.trailInfo.longitude}</p>
                <p>Latitude: {this.props.trailInfo.latitude}</p>
            </div>
        )
    }
}

export default TrailDetails;