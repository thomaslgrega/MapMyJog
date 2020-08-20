import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className='main-splash-container'>
      <div className='splash-image'>
        <div className='catch-phrase-container'>
          <hr size='8' />
          <span className='catch-phrase'>OWN EVERY MILE</span>
          <hr size='8' />
        </div>
        <div className='splash-text-container'>
          <span className='splash-app-desc'>The best mobile run tracking experience,</span>
          <span className='splash-app-desc'>backed by the world's largest digital</span>
          <span className='splash-app-desc'>health and fitness community.</span>
          <Link to='/signup' className='splash-sign-up-link'>SIGN UP</Link>
          <div className='splash-login-container'>
            <span className='log-in-desc'>Already a member?</span>
            <Link to='/login' className='splash-login-link'>LOG IN</Link>
          </div>
        </div>
      </div>
      <div className='slanted-div'></div>
    </div>
  )
};

export default Splash;