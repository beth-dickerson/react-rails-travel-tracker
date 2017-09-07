import React, { Component } from 'react';
import Location from '../components/locations';
import { Link } from 'react-router';


class LocationsIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/locations')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(body => {
      this.setState({
        locations: body
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {
    let locationComponent =
      this.state.locations.map((location) => {
        return(
          <Link to={`/locations/${location.id}`} key={location.id}>
            <Location
              key={location.id}
              id={location.id}
              name={location.name}
            />
          </Link>
        )
      })

    return (
      <div>
        <h1>T R A V E L    D E S T I N A T I O N S</h1>
        {locationComponent}
      </div>
    );
  }
}

export default LocationsIndexContainer;
