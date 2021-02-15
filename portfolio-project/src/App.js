import React from 'react'
// import { Icon } from 'semantic-ui-react'
import { GrMail, GrLink } from 'react-icons/gr'
import { BsChevronCompactDown } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import ReactRotatingText from 'react-rotating-text'

import project1 from '../src/images/finished.png'
import project2 from '../src/images/large-home.png'
import project3 from '../src/images/homepage.png'
import project4 from '../src/images/sharebnb-homepage.png'
import mac from '../src/images/mac.png'
import profileImage from '../src/images/profile-pic.JPG'

function App() {
  return (
    <main className='page-layout'>
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
          <a href='hugokinahan@hotmail.com' >
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
      <div className='title'>
        {/* <h1 className='typewriter'>Hugo Kinahan</h1> */}
        <ReactRotatingText className='title-name' items={['HUGO KINAHAN']} pause={100000} cursor={false} typingInterval={100}/>
        <i className="chevron-icon"><BsChevronCompactDown /></i>
      </div>
      <h1 id='about-me'>About Me</h1>
      <div className='bio'>
        <img className='profile-pic' src={profileImage}/>
        <div className='bio-text'>
          <h4>Hi, I&apos;m Hugo, a Software Engineer based in London. </h4>
          <p>I have always had a passion for tech and have always dreamed of turning an idea into something tangible such as a website. During the Covid pandemic I decided to take this passion a step further, so I enrolled on the Software Engineering Immersive Course at General Assembly. Over an amazing 12 weeks I completed four projects in a variety of languages and I was assured that this is the career for me.</p>
          <p>I am now looking to join an enthusiastic and ambitious team with an exciting product and a large scope for me to develop my skills.</p>
        </div>
      </div>
      <h1 id='languages'>Languages & Frameworks</h1>
      <div className='languages'>
        <div className='icon-layout'>
          <i className="devicon-react-original plain"></i>
          <p>React.js</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-javascript-plain plain"></i>
          <p>JavaScript</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-html5-plain plain"></i>
          <p>HTML5</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-css3-plain"></i>
          <p>CSS3</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-express-original"></i>
          <p>Express</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-django-plain"></i>
          <p>Django</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-python-plain"></i>
          <p>Python</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-babel-plain"></i>
          <p>Babel</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-chrome-plain"></i>
          <p>Chrome</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-git-plain"></i>
          <p>Git</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-github-original"></i>
          <p>GitHub</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-codepen-plain"></i>
          <p>CodePen</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-heroku-original"></i>
          <p>Heroku</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-nodejs-plain"></i>
          <p>Node.js</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-npm-original-wordmark"></i>
          <p>NPM</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-postgresql-plain"></i>
          <p>PostgreSQL</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-sass-original"></i>
          <p>Sass</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-slack-plain"></i>
          <p>Slack</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-swift-plain"></i>
          <p>Swift</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-trello-plain"></i>
          <p>Trello</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-typescript-plain"></i>
          <p>TypeScript</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-visualstudio-plain"></i>
          <p>VS Code</p>
        </div>
        <div className='icon-layout'>
          <i className="devicon-yarn-plain"></i>
          <p>Yarn</p>
        </div>
      </div>
      <div id='my-work' className='my-work-section'>
        <h1>My Work</h1>
        <h3>General Assembly</h3>
        <img src='https://www.drupal.org/files/general-assembly_logo.png' />
        <div className='projects'>
          <div className='project-border'>
            <h4>#4 Sharebnb</h4>
            <a href='https://share-bnb.herokuapp.com/' >
              <img className='project-image' src={project4} />
              <img src={mac} />
            </a>
            <div className='project-buttons' >
              <a href='https://github.com/hugokinahan/sei-project-4' >
                <Button className='link-button'><p><i className="devicon-github-original" /> Link To GitHub</p></Button>
              </a>
              <a href='https://share-bnb.herokuapp.com/' >
                <Button className='link-button'><p><i ><GrLink /> Link To Website</i></p></Button>
              </a>
            </div>
            <div className='icon-layout'>
              <i className="devicon-html5-plain plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-javascript-plain plain"></i>
              <i className="devicon-react-original plain"></i>
              <i className="devicon-python-plain"></i>
              <i className="devicon-django-plain"></i>
              <i className="devicon-postgresql-plain"></i>
              <i className="devicon-github-original"></i>
              <i className="devicon-git-plain"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-trello-plain"></i>
              <i className="devicon-heroku-original"></i>
            </div>
            <p>Sharebnb. A full stack application made with a Python Django REST Framework backend and a React frontend. Pair project. Time-frame: 1 week.</p>
          </div>
          <div className='project-border'>
            <h4>#3 2020 Reimagined</h4>
            <a href='https://project-3-2020-reimagined.herokuapp.com/' >
              <img className='project-image' src={project3} />
              <img src={mac} />
            </a>
            <div className='project-buttons' >
              <a href='https://github.com/hugokinahan/sei-project-3' >
                <Button className='link-button'><p><i className="devicon-github-original" /> Link To GitHub</p></Button>
              </a>
              <a href='https://project-3-2020-reimagined.herokuapp.com/' >
                <Button className='link-button'><p><i ><GrLink /> Link To Website</i></p></Button>
              </a>
            </div>
            <div className='icon-layout'>
              <i className="devicon-html5-plain plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-javascript-plain plain"></i>
              <i className="devicon-react-original plain"></i>
              <i className="devicon-mongodb-plain"></i>
              <i className="devicon-nodejs-plain"></i>
              <i className="devicon-express-original"></i>
              <i className="devicon-github-original"></i>
              <i className="devicon-git-plain"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-trello-plain"></i>
              <i className="devicon-heroku-original"></i>
            </div>
            <p>2020 Reimagined. A group project building a MERN fullstack application. Time-frame: 9 days.</p>
          </div>
          <div className='project-border'>
            <h4>#2 Superhero Showdown</h4>
            <a href='https://superhero-showdown-hugokinahan.netlify.app/' >
              <img className='project-image' src={project2} />
              <img src={mac} />
            </a>
            <div className='project-buttons' >
              <a href='https://github.com/hugokinahan/sei-project-2' >
                <Button className='link-button'><p><i className="devicon-github-original" /> Link To GitHub</p></Button>
              </a>
              <a href='https://superhero-showdown-hugokinahan.netlify.app/' >
                <Button className='link-button'><p><i ><GrLink /> Link To Website</i></p></Button>
              </a>
            </div>
            <div className='icon-layout'>
              <i className="devicon-html5-plain plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-javascript-plain plain"></i>
              <i className="devicon-react-original plain"></i>
              <i className="devicon-babel-plain"></i>
              <i className="devicon-github-original"></i>
              <i className="devicon-git-plain"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-trello-plain"></i>
              <i className="devicon-heroku-original"></i>
            </div>
            <p>Superhero Showdown. A pair project where we built a React.js App using a 3rd Party Superhero API based on the game &apos;Top Trumps&apos;. Time-frame: 48 hours.</p>
          </div>
          <div className='project-border'>
            <h4>#1 The Wizard Of Oz</h4>
            <a href='https://hugokinahan.github.io/sei-project-1/' >
              <img className='project-image' src={project1} />
              <img src={mac} />
            </a>
            <div className='project-buttons' >
              <a href='https://github.com/hugokinahan/sei-project-1' >
                <Button className='link-button'><p><i className="devicon-github-original" /> Link To GitHub</p></Button>
              </a>
              <a href='https://hugokinahan.github.io/sei-project-1/' >
                <Button className='link-button'><p><i ><GrLink /> Link To Website</i></p></Button>
              </a>
            </div>
            <div className='icon-layout'>
              <i className="devicon-html5-plain plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-javascript-plain plain"></i>
              <i className="devicon-github-original"></i>
              <i className="devicon-git-plain"></i>
            </div>
            <p>Follow The Yellow Brick Road. A grid-based game using HTML, CSS and JavaScript based on the classic arcade game &apos;Frogger&apos;. Time-frame: 1 week.</p>
          </div>
        </div>
      </div>
      <h1 id='contact'>Get In Touch</h1>
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
            <a href='hugokinahan@hotmail.com' >
              <p>hugokinahan@hotmail.com</p>
            </a>
          </div>
        </div>
        {/* <div className='footer-links'>
          <a href='https://www.linkedin.com/in/hugo-kinahan/' >
            <p>linkedin.com/in/hugo-kinahan/</p>
          </a>
          <a href='https://twitter.com/BestOfKin_' > 
            <p>@BestofKin_</p>
          </a>
          <a href='https://github.com/hugokinahan' >
            <p>github.com/hugokinahan</p>
          </a>
          <a href='hugokinahan@hotmail.com' >
            <p>hugokinahan@hotmail.com</p>
          </a>
        </div> */}
      </div>
    </main>
  )
}

export default App
