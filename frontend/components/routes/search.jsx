import React from 'react';
import RoutesIndex from './routes_index';
import RoutesMap from './routes_map';

const Search = (props) => (
  <div className="dashboard-container">
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

export default Search;