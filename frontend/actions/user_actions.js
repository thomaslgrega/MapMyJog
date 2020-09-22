import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const requestUser = userId => dispatch => {
  return userAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
};

export const requestUserFriends = userId => dispatch => {
  return userAPIUtil.fetchFriends(userId)
    .then(friends => dispatch(receiveFriends(friends)))
};

export const requestRandomUsers = () => dispatch => {
  return userAPIUtil.fetchRandomUsers()
    .then(users => dispatch(receiveUsers(users)))
};

export const requestUserSearch = query => dispatch => {
  return userAPIUtil.fetchUserSearch(query)
    .then(users => dispatch(receiveUsers(users)))
}