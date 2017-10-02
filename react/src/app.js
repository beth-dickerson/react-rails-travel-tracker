import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import VenuesIndexContainer from './containers/VenuesIndexContainer';
import VenueShowContainer from './containers/venueShowContainer';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  handleClose(){
    this.setState({ open: false });
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
        <AppBar
          title=" S H I M M Y "
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={{backgroundColor: '#FFC400'}}
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link activeClassName='active' to='/'>
            <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          </Link>
          <Link activeClassName='active' to='/venues'>
            <MenuItem onTouchTap={this.handleClose}>Venue</MenuItem>
          </Link>
        </Drawer>
          <Router history={browserHistory}>
            <Route path='/' >
              <IndexRoute component={VenuesIndexContainer} />
              <Route path="/venues" component={VenuesIndexContainer}/>
              <Route path="/venues/:id" component={VenueShowContainer}/>
            </Route>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
