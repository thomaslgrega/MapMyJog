import React from 'react';
import { Link } from 'react-router-dom';

class UsersShowRouteItem extends React.Component {
  constructor(props) {
    super(props)

    this.parseDate = this.parseDate.bind(this);
  }

  parseDate() {
    let dateStr = this.props.route.created_at.slice(0, 10);
    dateStr = dateStr.split('-');
    return `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`
  }

  render() {
    const { route } = this.props;

    return (
      <tr className="routes-table-row">
        <td><Link to={`/routes/${route.id}`} className='route-link'>{route.name}</Link></td>
        <td>{this.parseDate()}</td>
        <td>{route.distance}</td>
        <td>{route.activity}</td>
        <td>
          <span>Add to My Routes</span>
        </td>
      </tr>
    )
  }
};

export default UsersShowRouteItem;