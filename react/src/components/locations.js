import React from 'react';

const Location = (props) => {
  return (
    <div>
      <h1>{props.name}</h1><br />
      <h2>{props.locale}</h2><br />
      <h4>{props.people}</h4>
    </div>
  )
}

export default Location;
