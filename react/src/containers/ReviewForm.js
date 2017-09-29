import React, { Component } from 'react';
import UserTextField from '../components/UserTextField';
import Selector from '../components/Selector';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        starOptions: ["*", "**", "***", "****", "*****"],
        nameField: "",
        textContent: "",
        starSelected: "",
        venueId: this.props.venueId
    }
    this.handleReviewFormSubmit= this.handleReviewFormSubmit.bind(this)

    this.handleNameFieldChange= this.handleNameFieldChange.bind(this)
    this.handleUserTextFieldsChange= this.handleUserTextFieldsChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleClearForm= this.handleClearForm.bind(this)
  }

  handleClearForm(event) {
      event.preventDefault();
      this.setState({
          error: {},
          nameField: "",
          textContent: "",
          starSelected: "",
      })
  }

  handleReviewFormSubmit(event) {
      event.preventDefault();

      let formPayLoad= {
          name: this.state.nameField,
          content: this.state.textContent,
          rating: this.state.starSelected.length * 20
      }
      console.log(formPayLoad)
      this.props.reviewSubmit(formPayLoad)
      this.handleClearForm(event)

  }

  handleNameFieldChange(event) {
      this.setState({ nameField: event.target.value })
  }

  handleUserTextFieldsChange(event) {
      this.setState({ textContent: event.target.value})
  }

  handleRatingChange(event) {
      this.setState({ starSelected: event.target.value})
  }

  render() {
    return (
      <div className="ReviewForm">

        <form className="callout" onSubmit={this.handleReviewFormSubmit}>
            <h1>review</h1>
            <UserTextField
                value={this.state.nameField}
                label='Name:'
                name='name'
                handleFunction={this.handleNameFieldChange}
            />
            <Selector
                options={this.state.starOptions}
                label='rating:'
                selectedOption={this.state.starSelected}
                handlerFunction={this.handleRatingChange}
            />
            <UserTextField
                value={this.state.textContent}
                label='Review:'
                name='review'
                handleFunction={this.handleUserTextFieldsChange}
            />



        <input type="submit" className="button" value="Submit "/>
      </form>
      </div>
    );
  }
}

export default ReviewForm;
