export const fetchUserRoutes = userId => (
  $.ajax({
    url: `api/users/${userId}/routes`,
    method: 'GET'
  })
);

export const fetchRoute = routeId => (
  $.ajax({
    url: `api/routes/${routeId}`,
    method: 'GET'
  })
);

export const createRoute = route => (
  $.ajax({
    url: `api/routes`,
    method: 'POST',
    data: { route }
  })
);

export const updateRoute = route => (
  $.ajax({
    url: `api/routes/${route.id}`,
    method: 'PATCH',
    data: { route }
  })
);

export const deleteRoute = routeId => (
  $.ajax({
    url: `api/routes/${routeId}`,
    method: 'DELETE'
  })
);
