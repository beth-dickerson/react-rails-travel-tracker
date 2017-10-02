import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const Selector= (props) => {
    let optionElements= props.options.map(stars => {
        return (
          <div key={stars}>
          <MenuItem
            value={props.selectedOption} primaryText={stars}
            onChange={props.handlerFunction} />
          </div>
        );
    })
  return (
    <div className="Selector">
    <DropDownMenu
          onChange={props.handlerFunction}
    >
      {optionElements}
    </DropDownMenu>

    </div>
);
}

export default Selector;
