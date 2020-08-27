import React from 'react';
import Dashboard from '../dashboard/dashboard';
import UsersShowRouteItem from './users_show_route_item';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddFriend = this.handleAddFriend.bind(this);
    this.addFriendButton = this.addFriendButton.bind(this);
  }

  componentDidMount() {
    const { userId } = this.props.match.params
    this.props.requestUser(userId);
    this.props.requestRoutes(userId);
    this.props.requestFriends(this.props.currentUser.id)
  }

  handleAddFriend() {
    const { user, currentUser } = this.props;
    this.props.createFriendship({ user_id: currentUser.id, friend_id: user.id });
  }

  addFriendButton() {
    const { friendships, user } = this.props;
    let friendshipId;
    for (let key in friendships) {
      if (friendships[key].friend_id === user.id) {
        friendshipId = key;
      }
    }

    if (friendshipId) {
      return <span className='already-friended-btn' onClick={() => this.props.deleteFriendship(friendshipId)}>UNFRIEND</span>
    } else {
      return <span className='add-friend-btn' onClick={this.handleAddFriend}>ADD FRIEND</span>
    }
  }

  render() {
    const { user, routes } = this.props
    if (!user) {
      return null;
    }

    return (
      <div className='user-show-container'>
        <Dashboard />
        <div className='user-basic-info'>
          <span className="fas fa-running user-show-avatar"></span>
          <div className='next-to-avatar-container'>
            <span className='show-page-fullname'>{user.first_name} {user.last_name}</span>
            {this.addFriendButton()}
            {/* <span className='add-friend-btn' onClick={this.handleAddFriend}>ADD FRIEND</span> */}
          </div>
        </div>
        <div>
          <div className='routes-table-container'>
            <table className='routes-table'>
              <thead>
                <tr>
                  <th className='table-header'>Route Name</th>
                  <th className='table-header'>Created</th>
                  <th className='table-header'>Distance</th>
                  <th className='table-header'>Activity</th>
                  <th className='table-header'>Copy</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(routes).map(route => <UsersShowRouteItem
                                        key={route.id}
                                        route={route}/>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
