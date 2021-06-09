import React, { useState } from 'react'
import Home from './Home'
import AddContact from './AddContact'
import LinkToAddContactPage from './Links/LinkToAddContactPage'
import LinkToHomePage from './Links/LinkToHomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UpdateContact from './UpdateContact'
function Main() {
  const [data, setData] = useState()

  const selectData = (user) => {
    setData(user)
  }
  return (
    <div>
      <Router>
        <LinkToHomePage />
        <LinkToAddContactPage />
        <Switch>
          <Route path='/' exact={true}>
            <Home selectData={selectData} />
          </Route>
          <Route path='/add'>
            <AddContact />
          </Route>
          <Route path='/add'>
            <AddContact />
          </Route>
          <Route path='/update'>
            <UpdateContact data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Main
