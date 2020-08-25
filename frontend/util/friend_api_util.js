export const fetchUserFriends = userId => (
  $.ajax({
    url: `api/users/${userId}/friends`,
    method: 'GET'
  })
);

export const createFriend = friendship => (
  $.ajax({
    url: `api/friends`,
    method: 'POST',
    data: { friend: friendship }
  })
);

export const deleteFriend = friendshipId => (
  $.ajax({
    url: `api/friends/${friendshipId}`,
    method: 'DELETE'
  })
);