import React from 'react'

const Skills = props => {
  return (
    <div className="white-grey p-5">
    <div className="container">
    <div className="d-flex flex-column justify-content-center align-items-center">
    <div className="p-2"><h2 className="display-3">Skills</h2></div>
    <ul className="d-flex flex-row justify-content-center p-0 flex-wrap">
    {
    [0,1,2,3,4,5, 6, 7, 8, 9, 10].map(el =>
      <li className="icon-list p-2 d-inline-flex flex-column align-items-center m-2" key={el.toString()}>
        <i className="devicon-nodejs-plain icon"></i>
        <p className="icon-caption p-2">Node</p>
      </li>
    )}
    </ul>
    </div>
    </div>
    </div>
  )
}
export default Skills

//to add: mysql, c, java, django, heroku, express, webpack, git, babel, Jasmine
// <i className="devicon-react-original-wordmark colored"></i>
//       <i className="devicon-javascript-plain colored"></i>
//       <i className="devicon-sequelize-plain-wordmark colored"></i>
//       <i className="devicon-postgresql-plain-wordmark colored"></i>
//       <i className="devicon-python-plain-wordmark colored"></i>
//       <i className="devicon-css3-plain-wordmark colored"></i>
//       <i className="devicon-html5-plain-wordmark colored"></i>
//       <i className="devicon-c-line"></i>
