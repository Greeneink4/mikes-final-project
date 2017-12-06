import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client'; 
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import EasyTrails from './easy-trails';
import ModerateTrails from './moderate-trails';
import DifficultTrails from './difficult-trails';
import TrailDetails from './trail-details';
import './index.css';
import App from './App';


const httpLink = new HttpLink({ uri: 'http://api.graph.cool/simple/v1/cjaaildq800990105rdvkq0wa'})

const client = new ApolloClient({
    connectToDevTools: true,
    link: httpLink,
    cache: new InMemoryCache()
    })


ReactDOM.render(
    <MuiThemeProvider>
        <BrowserRouter>
            <ApolloProvider client={client}>     
                <Switch>                    
                    <Route exact path="/" component={App}/>
                    <Route path="/easy" component={EasyTrails}/>
                    <Route path="/moderate" component={ModerateTrails}/>
                    <Route path="/difficult" component={DifficultTrails}/>
                    <Route path="/trail-details" component={TrailDetails}/>
                </Switch>
            </ApolloProvider>                                
        </BrowserRouter>        
    </MuiThemeProvider>,
document.getElementById('root')
)

  


