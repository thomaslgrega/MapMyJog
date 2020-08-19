import { connect } from 'react-redux';
import { signup, loginDemo } from '../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to='/login' className='nav-link'>Already a member?</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  loginDemo: () => dispatch(loginDemo())
});

export default connect(mSTP, mDTP)(SessionForm);
