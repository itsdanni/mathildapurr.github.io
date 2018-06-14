import React from 'react'
import { Intro, Projects, Skills, About, Footer } from '../components'

const Content = props => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
export default Content
