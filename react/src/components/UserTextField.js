import React from 'react';
import TextField from 'material-ui/TextField';


const UserTextField = (props) => {
  const style = {
    marginLeft: 20,
    height: 100,
    width: 100
  };

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
