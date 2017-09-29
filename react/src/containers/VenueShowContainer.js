import React, { Component } from 'react';
import Venue from '../components/venue';
import ReviewForm from './ReviewForm';
import Review from '../components/review'

class VenueShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      reviews: [],
      selectedId: ''
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
        venue: body.venue,
        reviews: body.reviews
      })
    } )
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  reviewSubmit(submission) {
     event.preventDefault();
     submission.venue.id=this.state.selectedId
     this.setState({reviews:
     this.state.reviews.push(submission)
 })
  }

  selectedVenue() {
    return this.state.venue.find((venue) =>
      (venue.id === this.state.selectedId)
    )
  }

  // componentDidMount() {
  //   fetch(`/api/v1/venues/${this.props.params.id}/reviews/`)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(body => {
  //     this.setState({
  //       reviews: body
  //     })
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`));
  //
  // }

  render() {
    let reviews =
      this.state.reviews.map((review) => {
        return(
          <div>
            <Review
              key={review.id}
              id={review.id}
              title={review.title}
            />
          </div>
        )
      })

    return (
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Venue</h1>
            <Venue
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
            {reviews}
            <ReviewForm
              venueId={this.state.selectedId}
              reviewSubmit={this.reviewSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VenueShowContainer;
