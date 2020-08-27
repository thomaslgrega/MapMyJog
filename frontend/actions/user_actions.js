import * as userAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';


const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
})

export const requestUser = userId => dispatch => {
  return userAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))
};

export const requestUserFriends = userId => dispatch => {
  return userAPIUtil.fetchFriends(userId)
    .then(friends => dispatch(receiveFriends(friends)))
}