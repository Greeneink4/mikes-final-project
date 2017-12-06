import React from 'react';
import './easy-trails.css';
import NavigationBar from './navigation-bar';
import {MenuItemList} from './menu-item-list';
import {getTrails} from './services/trails';
import { withRouter } from 'react-router-dom';
import './easy-trails.css';


class EasyTrails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true, trails: []};
        getTrails(['green', 'greenBlue']).then(trails => this.setState({trails: trails}));
    }

    goToTrailDetailsPage = (trail) => {
        debugger;
        this.props.history.push({pathname:'/trail-details', state: {trail: trail}})
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className='easy-details'>
                    <h2>Easy Trails</h2>
                    <MenuItemList trails={this.state.trails} goToTrailDetailsPage={this.goToTrailDetailsPage} />
                </div>
            </div>
        );
    }
}

export default withRouter(EasyTrails)