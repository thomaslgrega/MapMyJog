import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestRoutes, requestRoute, createRoute, updateRoute, deleteRoute } from './actions/routes_actions';
import { createFriendship, deleteFriendship, requestFriends } from './actions/friendship_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    const script = document.getElementById('current-user-script');
    script.remove()
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
    window.dispatch = store.dispatch;
    // window.getState = store.getState;
    window.requestRoutes = requestRoutes;
    // window.requestRoute = requestRoute;
    // window.createRoute = createRoute;
    // window.updateRoute = updateRoute;
    // window.deleteRoute = deleteRoute;
    window.createFriend = createFriendship;
    window.deleteFriend = deleteFriendship;
    window.requestFriends = requestFriends;
  // test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
