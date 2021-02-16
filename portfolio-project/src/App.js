import React from 'react'
import Nav from './components/Nav'
import Title from './components/Title'
import About from './components/About'
import Languages from './components/Languages'
import MyWork from './components/MyWork'
import Contact from './components/Contact'

function App() {
  return (
    <main className='page-layout'>
      <Nav />
      <Title />
      <About />
      <Languages />
      <MyWork />
      <Contact />
    </main>
  )
}

export default App
