import React, { Component } from 'react';
import { Link } from 'react-router';
import Venue from '../components/venue';

class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/venues')
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
        venues: body
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {
    let venueComponent =
      this.state.venues.map((venue) => {
        return(
          <Link to={`/venues/${venue.id}`} key={venue.id}>
            <Venue
              key={venue.id}
              id={venue.id}
              photo={venue.photo}
              name={venue.name}
            />
          </Link>
        )
      })
    return (
      <div>
      <h1> S H I M M Y </h1>
      {venueComponent}
      </div>
    );
  }
}

export default VenuesIndexContainer;
