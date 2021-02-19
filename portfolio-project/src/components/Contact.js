import React from 'react'

import { GrMail } from 'react-icons/gr'

function Contact() {

  return (
    <div>
      <h1 className='get-in-touch' id='contact'>Get In Touch</h1>
      <div className='footer'>
        <div className='footer-icons'>
          <div className='social-icons'>
            <a href='https://www.linkedin.com/in/hugo-kinahan/' >
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href='https://twitter.com/BestOfKin_' >
              <i className="devicon-twitter-original"></i>
            </a>
          </div>
          <div className='footer-links'>
            <a href='https://www.linkedin.com/in/hugo-kinahan/' >
              <p>linkedin.com/in/hugo-kinahan/</p>
            </a>
            <a href='https://twitter.com/BestOfKin_' > 
              <p>@BestofKin_</p>
            </a>
          </div>
          <div className='social-icons'>
            <a href='https://github.com/hugokinahan' >
              <i className="devicon-github-original"></i>
            </a>
            <a href='hugokinahan@hotmail.com' >
              <i className="index-icon"><GrMail /></i>
            </a>
          </div>
          <div className='footer-links'>
            <a href='https://github.com/hugokinahan' >
              <p>github.com/hugokinahan</p>
            </a>
            <a href='mailto:hugokinahan@hotmail.com' >
              <p>hugokinahan@hotmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>Hugo Kinahan &copy; 2021</p>
      </footer>
    </div>
  )
}

export default Contact