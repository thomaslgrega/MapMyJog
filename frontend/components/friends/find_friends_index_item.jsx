import React from 'react';
import { Link } from 'react-router-dom';

class FindFriendsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props;
    return (
      <div className='friend-index-item'>
        <Link className="fas fa-running friend-index-logo" to={`/users/${user.id}`}></Link>
        <div className='friend-content'>
          <div className='full-name-container'>
            <span to={`/users/${user.id}`}>{user.first_name}</span>
            <span>{user.last_name}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default FindFriendsIndexItem;
