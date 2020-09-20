import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className='main-splash-container'>
      {/* <div className='splash-image'> */}
      <div className='splash-image'></div>
      <div className='catch-phrase-container'>
        <hr className='splash-1-hr' size='8' />
        <span className='catch-phrase'>OWN EVERY MILE</span>
        <hr className='splash-1-hr' size='8' />
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
      {/* </div> */}
      <div className='slanted-div'></div>
      {/* <div className='splash-image-2'>
        <div className='catch-phrase-container-2'>
          <hr className='splash-2-hr' size='8' />
          <span className='catch-phrase-2'>FIND YOUR PATH</span>
          <span className='catch-phrase-2'>ANYWHERE</span>
          <hr className='splash-2-hr' size='8' />
          <span className='catch-phrase-2-desc'>Create and discover new routes</span>
          <span className='catch-phrase-2-desc'>wherever you are. Save your favorites for</span>
          <span className='catch-phrase-2-desc'>the next time you're ready to run.</span>
        </div>
      </div> */}
    </div>
  )
};

export default Splash;