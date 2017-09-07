import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import LocationsIndexContainer from './containers/locationsIndexContainer';
import LocationShowContainer from './containers/locationShowContainer';

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
          <IndexRoute component={LocationsIndexContainer} />
          <Route path="/locations" component={LocationsIndexContainer}/>
          <Route path="/locations/:id" component={LocationShowContainer}/>
        </Route>
      </Router>
    );
  }
}

export default App;
