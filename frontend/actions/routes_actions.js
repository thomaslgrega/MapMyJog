import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_USER_ROUTES = 'RECEIVE_USER_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';

const receiveUserRoutes = routes => ({
  type: RECEIVE_USER_ROUTES,
  routes
});

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route
});

const removeRoute = routeId => ({
  type: REMOVE_ROUTE,
  routeId
});

export const requestRoutes = userId => dispatch => {
  return RouteAPIUtil.fetchUserRoutes(userId)
    .then(routes => dispatch(receiveUserRoutes(routes)))
};

export const requestRoute = routeId => dispatch => {
  return RouteAPIUtil.fetchRoute(routeId)
    .then(route => dispatch(receiveRoute(route)))
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)))
};

export const updateRoute = route => dispatch => {
  return RouteAPIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)))
};

export const deleteRoute = routeId => dispatch => {
  return RouteAPIUtil.deleteRoute(routeId)
    .then(() => dispatch(removeRoute(routeId)))
};
