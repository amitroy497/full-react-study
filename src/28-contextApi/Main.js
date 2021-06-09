import React from 'react'
import ComA from './ComA'
import { FirstName, LastName } from './CommonContext'

function Main() {
  return (
    <div>
      <h1>contextApi with React</h1>
      <FirstName.Provider value={'Amit'}>
        <LastName.Provider value={'Roy'}></LastName.Provider>
        <ComA />
      </FirstName.Provider>
    </div>
  )
}

export default Main
