import React from 'react'

import { Button } from 'semantic-ui-react'
import { GrLink } from 'react-icons/gr'

import project1 from '../images/finished.png'
import project2 from '../images/large-home.png'
import project3 from '../images/homepage.png'
import project4 from '../images/sharebnb-homepage.png'
import mac from '../images/mac.png'

function MyWork() {

  return (
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
  )
}

export default MyWork