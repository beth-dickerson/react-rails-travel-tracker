import React from 'react';

const UserTextField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        onChange={props.handleFunction}
        type='text'
        value={props.value}
      />
    </label>
  )
}

export default UserTextField;
