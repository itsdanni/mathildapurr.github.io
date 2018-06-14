import React from 'react'
import { Nav } from '../components'

const Main = props => {
  const { children } = props

  return (
    <div>
      <Nav />
      <main>
        { children }
      </main>
    </div>
  )
}
export default Main
