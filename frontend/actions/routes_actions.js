import * as RouteAPIUtil from '../util/route_api_util';

export const RECEIVE_USER_ROUTES = 'RECEIVE_USER_ROUTES';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';
export const CLEAR_ROUTE_ERRORS = 'CLEAR_ROUTE_ERRORS';

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

const receiveRouteErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors
})

export const clearRouteErrors = () => ({
  type: CLEAR_ROUTE_ERRORS
})

export const requestRoutes = userId => dispatch => {
  return RouteAPIUtil.fetchUserRoutes(userId)
    .then(routes => dispatch(receiveUserRoutes(routes)))
    .fail(errors => dispatch(receiveRouteErrors(errors.responseJSON)))
};

export const requestRoute = routeId => dispatch => {
  return RouteAPIUtil.fetchRoute(routeId)
    .then(route => dispatch(receiveRoute(route)))
    .fail(errors => dispatch(receiveRouteErrors(errors.responseJSON)))
};

export const createRoute = route => dispatch => {
  return RouteAPIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)))
    .fail(errors => dispatch(receiveRouteErrors(errors.responseJSON)))
};

export const updateRoute = route => dispatch => {
  return RouteAPIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)))
    .fail(errors => dispatch(receiveRouteErrors(errors.responseJSON)))
};

export const deleteRoute = routeId => dispatch => {
  return RouteAPIUtil.deleteRoute(routeId)
    .then(() => dispatch(removeRoute(routeId)))
    .fail(errors => dispatch(receiveRouteErrors(errors.responseJSON)))
};
