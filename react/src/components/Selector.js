import React from 'react';

const Selector= (props) => {
    let optionElements= props.options.map(stars => {
        return (
            <option key={stars} value={stars}>{stars}</option>
        );
    })
  return (
    <div className="Selector">
    <label>{props.label}
    <select name='name'
    value={props.selectedOption}
    onChange={props.handlerFunction}>
        <option value=""></option>
        {optionElements}
    </select>
    </label>
    </div>
);
}

export default Selector;
