import React from 'react'
import Sky from 'react-sky'
import ReactRotatingText from 'react-rotating-text'
import { BsChevronCompactDown } from 'react-icons/bs'

import ReactIcon from '../images/react-icon.png'
// import JSIcon from '../images/JavaScript.png'
// import HTMLIcon from '../images/html5.png'
// // import CSSIcon from '../images/css.jpg'
// import NodeIcon from '../images/node.jpg'

function Title() {

  return (
    <div className='title'>
      <Sky
        className='sky-float'
        images={{
          /* FORMAT AS FOLLOWS */
          0: ReactIcon, 
          // 1: JSIcon, /* You can pass as many images as you want */
          // 2: HTMLIcon,
          // 3: NodeIcon,
        }}
        how={50} /* Pass the number of images Sky will render chosing randomly */
        time={40} /* time of animation */
        size={'50px'} /* size of the rendered images */
        background={'palettedvioletred'} /* color of background */
      />
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