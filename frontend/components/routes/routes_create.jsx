import React from 'react';
import RoutesIndex from './routes_index';
import RoutesMap from './routes_map';

const RoutesCreate = (props) => (
  <div className="routes-container">
    <RoutesMap routes={props.routes} />
  </div>
);

export default RoutesCreate;