import React from 'react'
import { Project } from '../components'

const Projects = props => {
  return (
    <div className="p-5 light-grey">
      <div className="container d-flex flex-column">
        <div className="row p-3">
          <h1>Featured Projects</h1>
        </div>
        <div className="row p-3">
          <p className="text-muted">
            this is just a place holder for some real text on projects
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Project />
          </div>
          <div className="col-md-6 col-sm-12">
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
