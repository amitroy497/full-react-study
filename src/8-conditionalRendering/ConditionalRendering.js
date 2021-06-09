import React, { useState } from 'react'

function ConditionalRendering() {
  const [input, setInput] = useState('')
  const [loggedIn, setLoggedIn] = useState('')
  const getInput = (e) => {
    let data = e.target.value
    setInput(data)
    setLoggedIn(data)
  }
  return (
    <div>
      <h1>Conditional Rendering: If else statement</h1>
      {loggedIn === '1' ? (
        <h1>Welcome Amit</h1>
      ) : loggedIn === '2' ? (
        <h1>Welcome Jay</h1>
      ) : loggedIn === '3' ? (
        <h1>Welcome new user</h1>
      ) : (
        <h1>Error</h1>
      )}
      <input type='text' value={input} onChange={getInput} />
    </div>
  )
}

export default ConditionalRendering
