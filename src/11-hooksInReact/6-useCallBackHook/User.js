import React, { useState, useCallback } from 'react'
import List from './List'

function User() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const theme = {
    backgroundColor: dark ? '#000' : null,
    color: dark ? '#fff' : '#000',
  }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  return (
    <div>
      <h1>useCallBack Hook in React</h1>
      <div style={theme}>
        <input
          type='number'
          vakue={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />{' '}
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
        <List netItems={getItems} />
      </div>
    </div>
  )
}

export default User
