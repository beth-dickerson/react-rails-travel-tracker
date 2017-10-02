import React, { Component } from 'react';
import UserTextField from '../components/UserTextField';
import Selector from '../components/Selector';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const ReviewForm = (props) => {
  const style = {
    marginLeft: 20,
    height: 100,
    width: 100
  };
    return (
      <div className="ReviewForm">
      <Paper zDepth={5}
        style={{
        height: 600,
        width: 400,

        }}
      >
        <Card style={{
          height: 550,
          width: 350,
          margin: 20,
          backgroundColor: 'none',
          }}
        >
            <UserTextField
                value={props.nameField}
                label='Title:'
                name='title'
                handleFunction={props.handleNameFieldChange}
            />
            <Divider />
            <Selector
                options={props.starOptions}
                label='rating:'
                selectedOption={props.starSelected}
                handlerFunction={props.handleRatingChange}
            />
            <Divider />
            <UserTextField
                value={props.textContent}
                label='Review:'
                name='review'
                handleFunction={props.handleUserTextFieldsChange}
            />
            <Divider />
            <RaisedButton label="Add Review" secondary={true} onClick={props.handleReviewFormSubmit} />
        </Card>
      </Paper>

      </div>
    );
  }

export default ReviewForm;
