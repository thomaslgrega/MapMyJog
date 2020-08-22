import React from 'react';
import RoutesIndex from './routes_index';
import RoutesMap from './routes_map';

const RoutesCreate = (props) => (
  <div className="routes-container">
    <RoutesMap routes={props.routes} />
    <RoutesIndex 
      routes={props.routes} 
      currentUser={props.currentUser}
      requestRoutes={props.requestRoutes}
      requestRoute={props.requestRoute}
      createRoute={props.createRoute}
      updateRoute={props.updateRoute}
      deleteRoute={props.deleteRoute}
    />
  </div>
);

export default RoutesCreate;