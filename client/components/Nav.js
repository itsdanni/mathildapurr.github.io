import React from 'react'

const Nav = props => {
  return (
    <header>
    <div className="container-fluid ">
    <ul className="nav justify-content-end white-grey">
      <li className="nav-item">
        <a className="nav-link nav-link-style" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-style" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-link-style" href="#">Contact</a>
      </li>
    </ul>
    </div>
    </header>
  )
}

export default Nav
