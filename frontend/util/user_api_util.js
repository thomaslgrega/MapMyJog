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

export const fetchUserSearch = query => {
  return $.ajax({
    url: `api/users/search`,
    method: 'POST',
    data: { query }
  })
};