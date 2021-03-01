import React from 'react'
// import Sky from 'react-sky'
// import ReactRotatingText from 'react-rotating-text'
import { BsChevronCompactDown } from 'react-icons/bs'

// import ReactIcon from '../images/react-icon.png'
// import JSIcon from '../images/JavaScript.png'
// import HTMLIcon from '../images/html5.png'
// // import CSSIcon from '../images/css.jpg'
// import NodeIcon from '../images/node.jpg'

function Title() {

  return (
    <div className='title'>
      <div className='sub-heading'>
        <h1 className='phone-title'>HUGO KINAHAN</h1>
        <h5>· junior software engineer ·</h5>
        <i className="chevron-icon"><BsChevronCompactDown /></i>
      </div>
    </div>
  )
}

export default Title