import React, { Component } from 'react'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import history from './history'
import { Main, Content } from './components'

/**`
 * COMPONENT
 */
const Routes = props => {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route exact path='/' component={Content} />
        </Switch>
      </Main>
    </Router>
  )
}

export default Routes
