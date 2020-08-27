import React from 'react';
import FriendsIndexItem from './friends_index_item';
import friends_index_container from './friends_index_container';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    const { currentUser } = this.props
    this.props.requestFriends(currentUser.id)
    this.props.requestUserFriends(currentUser.id)
  }

  handleDelete(friendshipId) {
    this.props.deleteFriendship(friendshipId)
  }

  render() {
    let friendships;
    if (this.props.friendships) {
      friendships = Object.values(this.props.friendships)
    } else {
      friendships = []
    }

    let comp;
    if (this.props.friendships.length === 0) {
      comp = <div className='friends-content-container'>
        You have not added any friends yet. Click the Find Friends tab above to get started.
      </div>
    } else {
      comp = <div className='friends-content-container'>
        {
          friendships.map((friendship, i) => (
            <FriendsIndexItem
              key={friendship.id}
              friendship={friendship}
              deleteFriendship={this.handleDelete}
              requestUserFriends={this.props.requestUserFriends}
              users={this.props.users}
            />)
          )
        }
        {/* {
          this.props.friends.map(friend => 
            <FriendIndexItem 
              key={friend.id}
              // friendship={friendship}
              friend={friend}
              deleteFriendship={this.handleDelete}
              requestUserFriends={this.props.requestUserFriends}
            />)
        } */}
      </div>
    }

    return comp
  }
}

export default FriendsIndex
