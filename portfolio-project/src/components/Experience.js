import React from 'react'

import SUlogo from '../images/SU-logo.png'
import IGFlogo from '../images/igf.svg'

function Experience() {

  return (
    <main>
      <h1 className='exp-header'>Experience</h1>
      <div id='experience' className='experience-section'>
        <div className='projects'>
          <div className='project-border'>
            <h4>Seat Unique</h4>
            <h5>Account Manager</h5>
            <h5>2018-2020</h5>
            <a href='https://seatunique.com/' >
              <img src={SUlogo} />
              {/* <img src={mac} /> */}
            </a>
            <p>Through technology, Seat Unique provides an easy-to-use, trusted online platform that offers, and promotes awareness of official premium access to live events. My role included:</p>
            <p>· Managing the day-to-day running of the website through a bespoke tech portal.</p>
            <p>· Managing key accounts at prestigious clubs such as Chelsea FC, Man City FC, and Scotland Rugby.</p>
            <p>· Involved in creating and maintaining key partnerships with large venues, clubs, and ambassadors.</p>
            <p>· Assisting with offline and online sales when needed as well as the management of all sales administrative work.</p>
          </div>
        </div>
        <div className='projects'>
          <div className='project-border'>
            <h4>International Golf Federation (IGF)</h4>
            <h5>Intern</h5>
            <h5>2016</h5>
            <a href='https://www.igfgolf.org/' >
              <img src={IGFlogo} />
              {/* <img src={mac} /> */}
            </a>
            <p>Over two valuable weeks working for the IGF in Lausanne, I gained an insight into the processes behind one of golf&apos;s largest organisations as they prepared for the 2016 Rio Olympic Games. My role included:</p>
            <p>· Assisting with the preparation for golf’s inclusion in the 2016 Rio Olympic Games.</p>
            <p>· Researching and preparing official player biographies for the men and women competing at the Games.</p>
            <p>· Facilitating player and caddy registrations for the Games from competitors all over the world.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Experience