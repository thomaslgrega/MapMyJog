import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util';
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();

  // test 
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // test
  
  const root = document.getElementById('root');
  ReactDOM.render(<div>Welcome to MapMyJog!</div>, root);
});