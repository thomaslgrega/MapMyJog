export const fetchUser = userId => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  })
};

export const fetchFriends = () => {
  return $.ajax({
    url: `api/users`,
    method: 'GET'
  })
};

export const fetchRandomUsers = () => {
  return $.ajax({
    url: `api/users/random`,
    method: 'GET'
  })
};
