import React from 'react'
// import Sky from 'react-sky'
// import { Icon } from 'semantic-ui-react'
import { GrMail } from 'react-icons/gr'

import project1 from '../src/images/finished.png'
import project2 from '../src/images/large-home.png'
import project3 from '../src/images/homepage.png'
import project4 from '../src/images/sharebnb-homepage.png'


function App() {
  return (
    <main className='page-layout'>
      {/* <Sky
        images={{
          0: 'https://media-exp1.licdn.com/dms/image/C4D03AQEmgtdJa6jOOQ/profile-displayphoto-shrink_200_200/0/1587581731827?e=1618444800&v=beta&t=tyic_pnk0K5p1n8LHXvket-8Un2rIXFdXxsciZ9Vnvs',
        }}
        how={1}
        time={30} 
        size={'150px'} 
        background={'palettedvioletred'} 
      /> */}
      <div className='contact-icon'>
        <div className='icon-link'>
          <i className="devicon-linkedin-plain"></i>
          <p>linkedin.com/in/hugo-kinahan/</p>
        </div>
        <div className='icon-link'>
          <i className="devicon-twitter-original"></i>
          <p>@BestofKin_</p>
        </div>
        <div className='icon-link'>
          <i className="devicon-github-original"></i>
          <p>github.com/hugokinahan</p>
        </div>
        <div className='icon-link'>
          <i className="index-icon"><GrMail /></i>
          <p>hugokinahan@hotmail.com</p>
        </div>
      </div>
      <div className='title'>
        <h1>Hugo Kinahan</h1>
      </div>
      {/* <section className="header-image">
        <h1>
          <div className="extra-gap">Hugo</div>
          <div>
            <span>Kinahan</span>
          </div>
        </h1>
      </section> */}
      <h2>About Me</h2>
      <div className='bio'>
        <img className='profile-pic' src='https://media-exp1.licdn.com/dms/image/C4D03AQEmgtdJa6jOOQ/profile-displayphoto-shrink_200_200/0/1587581731827?e=1618444800&v=beta&t=tyic_pnk0K5p1n8LHXvket-8Un2rIXFdXxsciZ9Vnvs'/>
        <p className='bio-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lobortis suscipit. Etiam enim elit, venenatis eu magna ac, imperdiet dignissim nisl. Vestibulum congue dictum ipsum. Fusce eu interdum libero, eget sollicitudin arcu. Suspendisse sed arcu rhoncus, tempor leo in, commodo nunc. Maecenas dictum nisi eget feugiat viverra. Curabitur mollis augue sit amet nisi elementum, vitae facilisis arcu faucibus. Donec aliquet diam mi, at vulputate turpis condimentum ut. Nunc est magna, sodales ut semper eu, laoreet nec elit.</p>
      </div>
      <h2>Languages & Frameworks</h2>
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
      <div className='my-work-section'>
        <h2>My Work</h2>
        <h3>General Assembly</h3>
        <img src='https://www.drupal.org/files/general-assembly_logo.png' />
        <div className='projects'>
          <div className='project-border'>
            <h4>#4 Sharebnb</h4>
            <img src={project4} />
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
            <img src={project3} />
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
            <img src={project2} />
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
            <img src={project1} />
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
    </main>
  )
}

export default App
