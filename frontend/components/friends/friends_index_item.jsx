import React from 'react';

const FriendsIndexItem = props => {
  return (
    <div>
      <span>{props.friend.first_name} {props.friend.last_name}</span>
      <button onClick={() => props.deleteFriendship(props.friendshipId.id)}>Delete friend</button>
    </div>
  )
}

export default FriendsIndexItem;