import React from 'react'
// import Sky from 'react-sky'

function App() {
  return (
    <main className='page-layout'>
      {/* <Sky
          images={{
            0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png', 
            1: 'https://lh3.googleusercontent.com/proxy/D7pBHFG2wpBDSrmrpFwfDCfh04Kk01m8Epcb4kNDAi4uYMYQ6BmbtMvgMAGcWmjKxwnh13iNNLcDHWc7YaxvvV5zxettoxWK9F149Xh5MBFapT6rewIRXTzI9g7I06EJ-lzM3riA85k',
            2: 'https://www.freepngimg.com/download/golf_ball/1-2-golf-ball-transparent.png', 
            3: 'https://lh3.googleusercontent.com/proxy/nisZCNXX80LlXdEVzs0MZr_L_5j0DlAhgi8Bev9RFqG7rmlzAuYY6LdKVry46naUPu0mbL2OpCFJZf765xPpztm2MkmrSsPzhQW_YbfjiXatVYa7iN0JqXLeQNqjk8fgWdAf',
            4: 'https://freepngimg.com/thumb/tennis_ball/4-2-tennis-ball-free-download-png.png',
            5: 'https://www.jing.fm/clipimg/full/165-1659542_formula-one-clipart-formula-1-race-car-transparent.png',
          }}
          how={100}
          time={10} 
          size={'50px'} 
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
      </div>
      <div className='title'>
        <h1>Hugo Kinahan</h1>
      </div>
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
    </main>
  )
}

export default App
