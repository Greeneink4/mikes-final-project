import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header.js';
import Footer from './footer.js';
import TrailsView from './trails-view.js';
import TrailDetailsView from './trail-details-view.js';

const Layout = () => {
    return (
        <MuiThemeProvider>
            <Header />
            <div className="container-for-changing-views">
                <Route path="/" component={TrailsView} />
                <Route path="/users" component={TrailDetailsView} />
            </div>
            <Footer />
        </MuiThemeProvider>
    )
}

export default Layout