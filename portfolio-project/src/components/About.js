import React from 'react'

import profileImage from '../images/profile-pic.JPG'

function About() {

  return (
    <div>
      <h1 id='about-me' className='about'>About Me</h1>
      <div className='bio'>
        <img className='profile-pic' src={profileImage}/>
        <div className='bio-text'>
          <h4>Hi, I&apos;m Hugo, a Software Engineer based in London. </h4>
          <p>Since I was young, I have always had a passion for technology. Now, a few years on, I dream of turning inspirational and creative ideas into something tangible such as a website. During the Covid pandemic I decided to take my fervour a step further, so I enrolled on the Software Engineering Immersive Course at General Assembly. Over an amazingly informative and edifying 12 weeks I completed four projects in a variety of languages and I was assured, this is the career for me.</p>
          <p>I am now looking to join an enthusiastic and ambitious team with an exciting product and large scope for me to develop my skills.</p>
        </div>
      </div>
    </div>
  )
}

export default About