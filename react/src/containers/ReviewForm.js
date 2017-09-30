import React, { Component } from 'react';
import UserTextField from '../components/UserTextField';
import Selector from '../components/Selector';

const ReviewForm = (props) => {

    return (
      <div className="ReviewForm">
        <form className="callout" onSubmit={props.handleReviewFormSubmit}>
            <h1>review</h1>
            <UserTextField
                value={props.nameField}
                label='Title:'
                name='title'
                handleFunction={props.handleNameFieldChange}
            />
            <Selector
                options={props.starOptions}
                label='rating:'
                selectedOption={props.starSelected}
                handlerFunction={props.handleRatingChange}
            />
            <UserTextField
                value={props.textContent}
                label='Review:'
                name='review'
                handleFunction={props.handleUserTextFieldsChange}
            />
            <input type="submit" className="button" value="Submit"/>
        </form>
      </div>
    );
  }

export default ReviewForm;
