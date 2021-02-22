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
      <h1 className='my-work-header'>My Work</h1>
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
          <p>Our concept was a house swapping website. As a pair, we tackled the backend together to ensure we were in a strong position to begin our frontend.</p>
          <p>Moving onto the frontend, I worked on the homepage and show page using modals from react.js–popup to help get the most out of our website.</p>
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
          <p>2020 Reimagined. A group project building a MERN fullstack application after one week of tuition in Node.js and Express. Time-frame: 9 days.</p>
          <p>Our concept was to recreate the cancelled events of 2020 as if life in 2020 was normal. I took on the challenge of developing the backend after we built our own RESTful API, including complex tasks such as error handling and user authentication.</p>
          <p>After the completion of the backend, I moved onto the frontend and in particular focused on the implementation of MapBox in our application and animations for our homepage.</p>
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
          <p>We used detailed logic in React to determine the outcome after the user chose one attribute to compare against the Computer’s hidden equivalent attribute. I took the lead on styling the game akin to Superhero themes.</p>
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
          <p>This was my first proper project of my coding career after just three weeks of learning HTML, CSS and JavaScript.</p>
        </div>
      </div>
    </div>
  )
}

export default MyWork