import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EasyTrails from './easy-trails';
import ModerateTrails from './moderate-trails';
import DifficultTrails from './difficult-trails';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';


injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/easy" component={EasyTrails}/>
                <Route path="/moderate" component={ModerateTrails}/>
                <Route path="/difficult" component={DifficultTrails}/>
            </Switch>
        </BrowserRouter>
        <EasyTrails/>
        <ModerateTrails/>
        <DifficultTrails/>
    </MuiThemeProvider>

), document.getElementById('root'));
//registerServiceWorker();
