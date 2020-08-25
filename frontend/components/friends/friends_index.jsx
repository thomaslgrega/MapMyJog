import React from 'react';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount() {
    this.props.requestFriends(this.props.currentUser.id)
  }

  handleDelete(friendshipId) {
    this.props.deleteFriendship(friendshipId)
      // .then(this.props.history.push('/dashboard'))
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
              deleteFriendship={this.handleDelete} 
            />)
          )
        }
      </div>
    )
  }
}

export default FriendsIndex
