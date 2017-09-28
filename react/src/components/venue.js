import React from 'react';

const Venue = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.phone}</p>
      <p>{props.url}</p>
      <p>{props.photo}</p>
    </div>
  )
}

export default Venue;
