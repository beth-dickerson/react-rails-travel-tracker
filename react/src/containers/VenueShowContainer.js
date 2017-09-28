import React, { Component } from 'react';
import Venue from '../components/venue';
// import ReviewForm from './ReviewForm';

class VenueShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      reviews,
      selectedId: venue[0].id
    }
  }

  componentDidMount() {
    fetch(`/api/v1/venues/${this.props.params.id}/`)
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
        venue: body
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {

    return (
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Venue</h1>
            <Venue
              key={this.state.venue.id}
              id={this.state.venue.id}
              name={this.state.venue.name}
              address={this.state.venue.address}
              phone={this.state.venue.phone}
              url={this.state.venue.url}
              photo={this.state.venue.photo}
            />
          </div>
          <div className="small-9 columns">
            <h2>Reviews</h2>
            <ReviewForm
              venue_id={this.state.selectedId}
              reviewSubmit={this.reviewSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VenueShowContainer;
