import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      <Link to='/routes/new'>Create New Route</Link>
      <Link to='/routes'>Routes</Link>
    </div>
  )
}

export default Dashboard