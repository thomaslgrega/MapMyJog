import React from 'react';
import { Link } from 'react-router-dom';

class RouteIndexItem extends React.Component {
  constructor() {
    super()

    this.parseDate = this.parseDate.bind(this);
  }

  parseDate() {
    let dateStr = this.props.route.created_at.slice(0, 10);
    dateStr = dateStr.split('-');
    return `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`
  }

  render() {
    return (
      <tr className="routes-table-row">
        <td><Link to={`/routes/${this.props.route.id}/edit`} className='route-link'>{this.props.route.name}</Link></td>
        <td>{this.parseDate()}</td>
        <td>{this.props.route.distance}</td>
        <td>{this.props.route.activity}</td>
        <td>
          <Link to={`/routes/${this.props.route.id}/edit`} className='table-edit-link'>Edit</Link>
          <span onClick={() => this.props.deleteRoute(this.props.route.id)} className='table-delete-link'>Delete</span>
        </td>
      </tr>
    )
  }
};

export default RouteIndexItem;
