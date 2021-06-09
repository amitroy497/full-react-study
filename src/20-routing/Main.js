import React from 'react'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import PageNotFound from './PageNotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function Main() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Main
