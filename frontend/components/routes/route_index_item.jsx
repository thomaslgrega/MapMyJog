import React from 'react';

const RouteIndexItem = props => {
  return (
    <div>
      <p>{props.route.name}</p>
      <p>{props.route.description}</p>
      <p>{props.route.distance} miles</p>
    </div>
  )
};

export default RouteIndexItem;