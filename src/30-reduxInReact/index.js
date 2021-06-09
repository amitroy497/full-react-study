import React from 'react'
import Home from './Home'
import Store from './Store'
import { Provider } from 'react-redux'

function Main() {
  Store.subscribe(() => console.log(Store.getState()))

  return (
    <div>
      <React.StrictMode>
        <Provider store={Store}>
          <Home />
        </Provider>
      </React.StrictMode>
    </div>
  )
}

export default Main
