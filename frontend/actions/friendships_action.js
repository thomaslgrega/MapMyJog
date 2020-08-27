import * as FriendsAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_USER_FRIENDS = 'RECEIVE_USER_FRIENDS';

const removeFriend = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
});

const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

const receiveUserFriends = friendships => ({
  type: RECEIVE_USER_FRIENDS,
  friendships
});

export const deleteFriendship = friendshipId => dispatch => {
  return FriendsAPIUtil.deleteFriend(friendshipId)
    .then(() => dispatch(removeFriend(friendshipId)))
};

export const createFriendship = friendship => dispatch => {
  return FriendsAPIUtil.createFriend(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};

export const requestFriends = userId => dispatch => {
  return FriendsAPIUtil.fetchUserFriends(userId)
    .then(friendships => dispatch(receiveUserFriends(friendships)))
};
