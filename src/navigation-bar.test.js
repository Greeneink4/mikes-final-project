import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigation-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MuiThemeProvider><NavigationBar /></MuiThemeProvider>, div);
});