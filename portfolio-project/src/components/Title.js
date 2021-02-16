import React from 'react'

import ReactRotatingText from 'react-rotating-text'
import { BsChevronCompactDown } from 'react-icons/bs'

function Title() {

  return (
    <div className='title'>
      {/* <h1 className='typewriter'>Hugo Kinahan</h1> */}
      <ReactRotatingText className='title-name' items={['HUGO KINAHAN']} pause={100000} cursor={false} typingInterval={100}/>
      <div className='sub-heading'>
        <h5>· junior software engineer ·</h5>
        <i className="chevron-icon"><BsChevronCompactDown /></i>
      </div>
    </div>
  )
}

export default Title