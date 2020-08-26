import React from 'react';
import { Link } from 'react-router-dom';

const FriendsIndexItem = props => {
  debugger
  return (
    <div>
      <Link to={`/users/${props.friend.id}`}>{props.friend.first_name}</Link>
      <span>{props.friend.last_name}</span>
      <button onClick={() => { window.location.reload(false); props.deleteFriendship(props.friendshipId.id)}}>Delete friend</button>
    </div>
  )
}

export default FriendsIndexItem;
