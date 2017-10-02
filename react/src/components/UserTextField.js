import React from 'react';

const UserTextField = (props) => {
  return (
    <TextField
      hintText={props.label}
      style={style} underlineShow={false}
      name={props.name}
      onChange={props.handleFunction}
      type='text'
      value={props.value}
      />
  )
}

export default UserTextField;
