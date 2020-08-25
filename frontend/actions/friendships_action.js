import * as FriendsAPIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';

const removeFriend = friendshipId => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId
});

const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const deleteFriendship = friendshipId => dispatch => {
  return FriendsAPIUtil.deleteFriend(friendshipId)
    .then(() => dispatch(removeFriend(friendshipId)))
};

export const createFriendship = friendship => dispatch => {
  return FriendsAPIUtil.createFriend(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)))
};