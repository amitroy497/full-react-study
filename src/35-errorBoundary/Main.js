import React from 'react'
import User from './Components/User'
import ErrorBound from './Components/ErrorBound'
const Main = () => {
  return (
    <div>
      <h1>Error Boundary in React</h1>
      <ErrorBound>
        <User />
      </ErrorBound>
    </div>
  )
}

export default Main
