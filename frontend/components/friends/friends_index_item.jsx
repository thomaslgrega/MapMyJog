import React from 'react';
import { Link } from 'react-router-dom';

const FriendsIndexItem = props => {
  return (
    <div className='friend-index-item'>
      <Link className="fas fa-running" to={`/users/${props.friend.id}`}></Link>
      <div className='friend-content'>
        <div className='full-name-container'>
          <span to={`/users/${props.friend.id}`}>{props.friend.first_name}</span>
          <span>{props.friend.last_name}</span>
        </div>
        {/* <button onClick={() => { window.location.reload(false); props.deleteFriendship(props.friendshipId.id)}}>Delete friend</button> */}
        <span className='remove-friend-btn' onClick={() => { window.location.reload(false); props.deleteFriendship(props.friendshipId.id) }}>unfriend</span>
        {/* <span className="fas fa-times-circle" onClick={() => { window.location.reload(false); props.deleteFriendship(props.friendshipId.id) }}></span> */}

      </div>
    </div>
  )
}

export default FriendsIndexItem;
