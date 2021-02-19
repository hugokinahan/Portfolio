import React from 'react'
import { GrMail } from 'react-icons/gr'

function Nav() {

  return (
    <div className='contact-icon'>
      <div className='icon-link'>
        <a href='https://www.linkedin.com/in/hugo-kinahan/' >
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <div className='icon-link'>
        <a href='https://twitter.com/BestOfKin_' >
          <i className="devicon-twitter-original"></i>
        </a>
      </div>
      <div className='icon-link'>
        <a href='https://github.com/hugokinahan' >
          <i className="devicon-github-original"></i>
        </a>
      </div>
      <div className='icon-link'>
        <a href='mailto:hugokinahan@hotmail.com' >
          <i className="index-icon"><GrMail /></i>
        </a>
      </div>
      <div className='nav'>
        <a href='#about-me'>
          <p>about.</p>
        </a>
        <a href='#languages'>
          <p>languages.</p>
        </a>
        <a href='#my-work'>
          <p>my work.</p>
        </a>
        <a href='#contact'>
          <p>contact.</p>
        </a>
      </div>
    </div>
  )
}

export default Nav