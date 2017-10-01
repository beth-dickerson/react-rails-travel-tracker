import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card} from 'material-ui/Card';


const VenueForm = (props) => {
  const style = {
    marginLeft: 20,
    height: 100,
    width: 100
  };

  return (
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
          hintText="Venue Name:"
          name="venue-name"
          onChange={props.handleNameChange}
          type='text'
          value={props.nameContent}
        />

        <Divider />

        <TextField
          style={style} underlineShow={false}
          hintText="Venue Address:"
          name="venue-address"
          onChange={props.handleAddressChange}
          type='text'
          value={props.addressContent}
        />
        <Divider />

        <TextField
          style={style} underlineShow={false}
          hintText="Venue Phone Number:"
          name="venue-phone"
          onChange={props.handlePhoneChange}
          type='text'
          value={props.phoneContent}
        />
        <Divider />

        <TextField
          style={style} underlineShow={false}
          hintText="Venue Website:"
          name="venue-url"
          onChange={props.handleUrlChange}
          type='text'
          value={props.urlContent}
        />
        <Divider />

        <TextField
          style={style} underlineShow={false}
          hintText="Venue Photo:"
          name="venue-photo"
          onChange={props.handlePhotoChange}
          type='text'
          value={props.photoContent}
        />
        <Divider />
        <RaisedButton label="Add Venue" secondary={true} onClick={props.handleFormSubmit}/>
      </Card>
    </Paper>

  );
}

export default VenueForm;
