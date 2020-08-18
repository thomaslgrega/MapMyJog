import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = state => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to='/login'>Already have an account?</Link>
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);
