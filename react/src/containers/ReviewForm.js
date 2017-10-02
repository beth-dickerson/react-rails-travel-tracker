import React, { Component } from 'react';
import Selector from '../components/Selector';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const ReviewForm = (props) => {
  const style = {
    marginLeft: 20,
    height: 100,
    width: 100
  };

  let optionElements= props.starOptions.map(stars => {
      return (
        <div key={stars}>
        <MenuItem
          value={stars} primaryText={stars}
          onChange={props.handlerFunction} />
        </div>
      );
  })

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
            <TextField
              style={style} underlineShow={false}
              value={props.titleField}
              hintText='Title:'
              name='title'
              onChange={props.handleTitleFieldChange}
            />
            <Divider />
            <DropDownMenu
              onChange={props.handleRatingChange}
              style={{ width: 200 }}
            >
              {optionElements}
            </DropDownMenu>

            <Divider />
            <TextField
              style={style} underlineShow={false}
              value={props.textContent}
              hintText='Review:'
              name='review'
              onChange={props.handleUserTextFieldsChange}
            />
            <Divider />
            <RaisedButton label="Add Review" style={{backgroundColor: '#FFC400'}} onClick={props.handleReviewFormSubmit} />
        </Card>
      </Paper>

      </div>
    );
  }

export default ReviewForm;
