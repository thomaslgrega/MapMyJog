import * as FriendsAPIUtl from '../util/friend_api_util';

export const RECEIVE_USER_FRIENDS = 'RECEIVE_USER_FRIENDS';
export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';

const receiveUserFriends = friendships => ({
  type: RECEIVE_USER_FRIENDS,
  friendships
});

const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
})

const removeFriend = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
})

export const requestFriends = userId => dispatch => {
  return FriendsAPIUtl.fetchUserFriends(userId)
    .then(friends => dispatch(receiveUserFriends(friends)))
};

export const createFriendship = friendship => dispatch => {
  return FriendsAPIUtl.createFriend(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};

export const deleteFriendship = friendshipId => dispatch => {
  return FriendsAPIUtl.deleteFriend(friendshipId)
    .then(() => dispatch(removeFriend(friendshipId)))
};
