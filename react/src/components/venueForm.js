import React from 'react';

const VenueForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label>Venue Name:
        <input
          name="venue-name"
          onChange={props.handleNameChange}
          type='text'
          value={props.nameContent}
        />
      </label>
      <label>Venue Address:
        <input
          name="venue-address"
          onChange={props.handleAddressChange}
          type='text'
          value={props.addressContent}
        />
      </label>
      <label>Venue Phone Number:
        <input
          name="venue-phone"
          onChange={props.handlePhoneChange}
          type='text'
          value={props.phoneContent}
        />
      </label>
      <label>Venue Website:
        <input
          name="venue-url"
          onChange={props.handleUrlChange}
          type='text'
          value={props.urlContent}
        />
      </label>
      <label>Venue Photo:
        <input
          name="venue-photo"
          onChange={props.handlePhotoChange}
          type='text'
          value={props.photoContent}
        />
      </label>
      <div className="button-group">
          <button className="button">Clear</button>
          <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default VenueForm;
