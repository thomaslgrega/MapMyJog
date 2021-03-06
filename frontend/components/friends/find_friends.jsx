import React from 'react';
import { connect } from 'react-redux';
import UsersShowRouteItem from '../users/users_show_route_item';
import FindFriendsIndexItem from './find_friends_index_item';
import { requestFriends } from '../../actions/friendships_action';
import { requestRandomUsers, requestUser, requestUserSearch } from '../../actions/user_actions';

class FindFriends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.requestFriends(this.props.currentUser.id)
    this.props.requestRandomUsers()
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSearch() {
    requestUserSearch(this.props.requestUserSearch(this.state.query));
  }

  render() {
    const { users, friendships, currentUser } = this.props;
    const friendsIdsArr = [] 
    Object.values(friendships).forEach(friendship => friendsIdsArr.push(friendship.friend_id))

    const unfriendedUsers = [];
    Object.values(users).forEach(user => {
      if (user.id !== currentUser.id && !friendsIdsArr.includes(user.id)) {
        if (user.first_name.toLowerCase().includes(this.state.query.toLowerCase()) || user.last_name.toLowerCase().includes(this.state.query.toLowerCase())) {
          unfriendedUsers.push(user);
        }
      }
    });

    return (
      <div className='find-friends-container'>
        {/* <div className='seach-container'> */}
          <span className='find-friends-span'>Find Friends by First Name or Last Name:</span>
          <div className='search-bar-container'>
            <input type="text" className='friend-search-bar' value={this.state.query} onChange={this.update("query")}/>
            <span className='friend-search-btn' onClick={this.handleSearch}>SEARCH</span>
          </div>
        {/* </div> */}
        <span className='checkout-friends-span'>Or check out some of our favorite users!</span>
        <div className='more-friends-list'>
          {
            unfriendedUsers.map(user => <FindFriendsIndexItem key={user.id} user={user} />)
          }
        </div>
      </div>
    )
  }
}

const mSTP = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id],
    currentUserId: session.id,
    friendships: entities.friendships,
    users: entities.users
  }
};

const mDTP = dispatch => ({
  requestFriends: userId => dispatch(requestFriends(userId)),
  requestRandomUsers: () => dispatch(requestRandomUsers()),
  requestUserSearch: query => dispatch(requestUserSearch(query)),
  requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP)(FindFriends);

// export default FindFriends;