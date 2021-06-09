import React from 'react'
import { withRouter } from 'react-router-dom'

function User2(props) {
  console.log(props.match.params)
  return (
    <div>
      <h1>This is user number {props.match.params.id}</h1>
      <h1>This is user name {props.match.params.name}</h1>
    </div>
  )
}

export default withRouter(User2)
