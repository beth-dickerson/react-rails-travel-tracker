import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import VenuesIndexContainer from './containers/VenuesIndexContainer';
import VenueShowContainer from './containers/venueShowContainer';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
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
