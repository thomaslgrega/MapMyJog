import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to='/signup' className='nav-link'>Become a member</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);
