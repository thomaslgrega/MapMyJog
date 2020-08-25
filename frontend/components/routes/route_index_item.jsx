import React from 'react';
import { Link } from 'react-router-dom';

const RouteIndexItem = props => {
  return (
    <div>
      <Link to={`/routes/${props.route.id}/edit`}>{props.route.name}</Link>
      <p>{props.route.name}</p>
      <p>{props.route.description}</p>
      <p>{props.route.distance} miles</p>
    </div>
  )
};

export default RouteIndexItem;
