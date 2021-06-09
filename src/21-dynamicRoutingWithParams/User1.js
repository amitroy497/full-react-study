import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import User2 from './User2'

function User1() {
  const list = [
    {
      id: 1,
      name: 'Bruce',
      email: 'bat@test.com',
      mobile: '0000',
    },
    {
      id: 2,
      name: 'Tony',
      email: 'iron@test.com',
      mobile: '1111',
    },
    {
      id: 3,
      name: 'Steve',
      email: 'captain@test.com',
      mobile: '2222',
    },
    {
      id: 4,
      name: 'Clarke',
      email: 'superman@test.com',
      mobile: '3333',
    },
    {
      name: 'amit',
      email: 'amit@test.com',
      mobile: '7777',
      id: 5,
    },
    {
      id: '10',
      name: 'jay',
      email: 'jay@test.com',
      mobile: '888',
    },
  ]
  return (
    <div>
      <h1>Dynamic Routing with Params</h1>
      <Router>
        {list.map((item, i) => (
          <div key={i}>
            <Link to={'/user/' + item.id + '/' + item.name}>
              <h1>{item.name}</h1>
            </Link>
          </div>
        ))}
        <Route path='/user/:id/:name'>
          <User2 />
        </Route>
      </Router>
    </div>
  )
}

export default User1
