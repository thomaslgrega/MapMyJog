import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='first-band-container'>
        <div className='first-band'>
          <span className='footer-logo'>MAPMYJOG</span>
          <span className='footer-verb'>RIDE</span>
          <span className='footer-verb'>RUN</span>
          <span className='footer-verb'>WALK</span>
          <span className='footer-verb'>FITNESS</span>
        </div>
      </div>
      <div className='second-band-background'>
        <div className='second-band'>
          <div className='second-band-left'>
            <div className='second-band-left-div'>
              <span className='left-div-title'>SOCIAL</span>
              <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="footer-personal-link">Connect on LinkedIn</a>
              <a href="https://angel.co/u/thomas-grega" target="_blank" className="footer-personal-link">Connect on AngelList</a>
              <a href="https://github.com/thomaslgrega/MapMyJog" target="_blank" className="footer-personal-link">GitHub Repo</a>
            </div>
            <div className='second-band-left-div'>
              <span className='left-div-title'>QUICK LINKS</span>
              <Link to='/login' className='footer-auth-links'>Login</Link>
              <Link to='/signup' className='footer-auth-links'>Signup</Link>
            </div>
          </div>
          <div className='second-band-right'>
            <span className='second-band-right-title'>PERSONAL LINKS</span>
            <div className='second-band-right-links'>
              <a href="https://github.com/thomaslgrega" target="_blank" className="fab fa-github-square right-band-link"></a>
              <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="fab fa-linkedin right-band-link"></a>
              <a href="https://angel.co/u/thomas-grega" target="_blank" className="fab fa-angellist right-band-link-angellist"></a>
            </div>
          </div>
        </div>
      </div>
      <div className='third-band'>
        <span>Created by Thomas Grega</span>
        <span>|</span>
        <span>Demonstration purposes only</span>
        <span>|</span>
        <a href="https://www.mapmyrun.com/" target='_blank'>MapMyRun website</a>
      </div>
    </footer>
  )
}

export default Footer;