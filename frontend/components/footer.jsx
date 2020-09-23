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
      <div className='second-band'>
        <div className='second-band-left'>
          <div className='second-band-left-div'>
            <span className='left-div-title'>SOCIAL</span>
            <a href="https://github.com/thomaslgrega" target="_blank" className="fab fa-github-square footer-personal-link"></a>
            <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="fab fa-linkedin footer-personal-link"></a>
            <a href="https://angel.co/u/thomas-grega" target="_blank" className="fab fa-angellist footer-personal-link"></a>
          </div>
          <div className='second-band-left-div'>
            <span className='left-div-title'>HELP</span>

          </div>
          <div className='second-band-left-div'>
            <span className='left-div-title'>ABOUT ME</span>

          </div>
        </div>
        <div className='second-band-right'>

        </div>
      </div>
      <div className='third-band'>

      </div>
    </footer>
  )
}

export default Footer;