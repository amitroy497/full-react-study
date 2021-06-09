import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {
  console.log(state, action)
  if (action.type === 'INCREMENT') {
    return state + 1
  }
  if (action.type === 'DECREMENT') {
    return state - 1
  }
}

function User() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer Hook in React</h1>
      <h1>{state}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '50%',
          margin: '0 auto',
        }}
      >
        <button
          style={{
            background: 'green',
            padding: '10px',
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </button>
        <button
          style={{
            background: 'red',
            padding: '10px',
            color: '#fff',
            borderRadius: '5px',
            border: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default User
