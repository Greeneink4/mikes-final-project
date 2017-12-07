import React from 'react';
import NavigationBar from './navigation-bar';
import {MenuItemList} from './menu-item-list';
import {getTrails} from './services/trails';
import { withRouter } from 'react-router-dom';
import './details.css';



class DifficultTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true, trails: []}; //Setting trails to empty array
        //getTrails function and set trails in state
        getTrails(['black']).then(trails => this.setState({trails: trails}));
    }  //setState changes the state to render only the green and greenblue trails

    goToTrailDetailsPage = (trail) => {
        debugger;
        this.props.history.push({pathname:'/trail-details', state: {trail: trail}})
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className='details'>
                    <div className='details-header'>
                        <h2>Difficult Trails</h2>
                    </div>                     
                    <div className= 'menu-list'>
                        <MenuItemList trails={this.state.trails} goToTrailDetailsPage={this.goToTrailDetailsPage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(DifficultTrails)