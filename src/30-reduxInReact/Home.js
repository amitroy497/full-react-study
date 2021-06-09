import React from 'react'
import { incNumber } from './Actions/IncNumber'
import { decNumber } from './Actions/DecNumber'
import { useSelector, useDispatch } from 'react-redux'

function Home() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <h1>Redux in React</h1>
      <h1>Increment / Decrement a number</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          margin: '0 auto',
          width: '20%',
        }}
      >
        <button
          style={{
            background: 'red',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '10px',
            border: 'none',
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(decNumber())}
        >
          -
        </button>
        <input type='text' value={myState} style={{ margin: '0 10px' }} />
        <button
          style={{
            background: 'green',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '10px',
            border: 'none',
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(incNumber(5))}
        >
          +
        </button>
      </div>
    </React.Fragment>
  )
}

export default Home
