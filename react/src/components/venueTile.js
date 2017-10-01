import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const VenueTile = (props) => {
  let style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
  return (
    <div>

      <Card  style={{
              width: '50%',
              margin: '0 auto',
              border: '2px solid #795548',
              backgroundColor: '#212121',
            }}
      >
        <CardHeader title={props.name} />
        <CardMedia overlay={<CardTitle title={props.name} />} >
          <img src={props.photo} />
        </CardMedia>
        <CardText>
        <p>{props.address}</p>
        <p>{props.phone}</p>
        <p>{props.url}</p>
        </CardText>
      </Card>

    </div>
  )
}

export default VenueTile;
