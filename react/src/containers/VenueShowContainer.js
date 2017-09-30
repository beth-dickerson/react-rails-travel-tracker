import React, { Component } from 'react';
import VenueTile from '../components/venueTile';
import ReviewForm from './ReviewForm';
import Review from '../components/review'

class VenueShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venue: {},
      reviews: [],
      starOptions: ["*", "**", "***", "****", "*****"],
      titleField: "",
      textContent: "",
      starSelected: "",
      venueId: this.props.venueId
    }
    this.addNewReview= this.addNewReview.bind(this)
    this.handleReviewFormSubmit= this.handleReviewFormSubmit.bind(this)
    this.handleTitleFieldChange= this.handleTitleFieldChange.bind(this)
    this.handleUserTextFieldsChange= this.handleUserTextFieldsChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleClearForm= this.handleClearForm.bind(this)
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

  addNewReview(formPayLoad) {
    fetch('/api/v1/venues/', {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(formPayLoad)
    })
    .then(response => response.json())
    .then(review => {
      let new_review = this.state.reviews.concat(formPayLoad)
      this.setState(reviews: new_review)
    })
  }

 handleReviewFormSubmit(event) {
   event.preventDefault();
   let reviews = this.state.reviews
   let formPayLoad = JSON.stringify({
      review: {
        titleField: this.state.titleField,
        textContent: this.state.textContent,
        starSelected: this.state.starSelected
      }
    })
    this.addNewReview(formPayLoad)
    this.handleClearForm()
  }

  selectedVenue() {
    return this.state.venue.find((venue) =>
      (venue.id === this.state.venueId)
    )
  }

  handleClearForm(event) {
      this.setState({
          titleField: "",
          textContent: "",
          starSelected: "",
      })
  }

  handleTitleFieldChange(event) {
      this.setState({ titleField: event.target.value })
  }

  handleUserTextFieldsChange(event) {
      this.setState({ textContent: event.target.value})
  }

  handleRatingChange(event) {
      this.setState({ starSelected: event.target.value})
  }


  render() {
    let reviews =
      this.state.reviews.map((review) => {
        return(
          <div>
            <Review
              key={review.id}
              id={review.id}
              title={review.title}
              rating={review.rating}
              content={review.content}
            />
          </div>
        )
      })

    return (
      <div>
        <div className="row">
          <div className="small-3 columns">
            <h1>Venue</h1>
            <VenueTile
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
              venueId={this.selectedVenue}
              handleReviewFormSubmit={this.handleReviewFormSubmit}
              handleTitleFieldChange={this.handleTitleFieldChange}
              handleUserTextFieldsChange={this.handleUserTextFieldsChange}
              handleRatingChange={this.handleRatingChange}
              titleContent={this.state.titleField}
              ratingContent={this.state.starSelected}
              textContent={this.state.textContent}
              starOptions={this.state.starOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VenueShowContainer;
