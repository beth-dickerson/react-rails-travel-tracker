import React from 'react';

const Review = (props) => {
  console.log(props);
  return (
    <div className="Review" id={props.id}>
      <p>{props.title}</p>
      <p>{props.rating}</p>
      <p>{props.content}</p>
    </div>
  )
}

export default Review;
