import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import VenuesIndexContainer from './containers/VenuesIndexContainer';
import VenueShowContainer from './containers/venueShowContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <Router history={browserHistory}>
        <Route path='/' >
          <IndexRoute component={VenuesIndexContainer} />
          <Route path="/venues" component={VenuesIndexContainer}/>
          <Route path="/venues/:id" component={VenueShowContainer}/>
        </Route>
      </Router>
    );
  }
}

export default App;
