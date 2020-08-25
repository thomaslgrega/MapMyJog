import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
  componentDidMount() {
    this.props.requestFriends(this.props.currentUser.id)
  }

  render() {
    let friendships;
    if (this.props.friendships) {
      friendships = this.props.friendships
    } else {
      friendships = []
    }

    return (
      <div>
        <h1>My Friends</h1>
        {
          this.props.friends.map((friend, i) => (
            <FriendsIndexItem 
              key={friend.id} 
              friend={friend}
              friendshipId={friendships[i]}
              deleteFriendship={this.props.deleteFriendships} 
            />)
          )
        }
      </div>
    )
  }
}

export default FriendsIndex
