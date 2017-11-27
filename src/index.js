import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client'; 
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createNetworkInterface } from 'react-apollo';
import EasyTrails from './easy-trails';
import ModerateTrails from './moderate-trails';
import DifficultTrails from './difficult-trails';
import TrailDetails from './trail-details';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

// const networkInterface = createNetworkInterface({
//     uri: process.env.REACT_APP_GRAPHQL_URI
// });

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjahc39by157a0179fy5qmjwy' }),
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV === 'development',
    dataIdFromObject: o => o.id
    });


ReactDOM.render(
    <MuiThemeProvider>
        <ApolloProvider client={client}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/easy" component={EasyTrails}/>
                <Route path="/moderate" component={ModerateTrails}/>
                <Route path="/difficult" component={DifficultTrails}/>
                <Route path="/trail-details" component={TrailDetails}/>
            </Switch>
        </BrowserRouter>
        </ApolloProvider>  
    </MuiThemeProvider>,
document.getElementById('root')
)

  

//registerServiceWorker();
