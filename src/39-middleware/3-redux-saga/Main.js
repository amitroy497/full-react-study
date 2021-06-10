import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import store from './Store/Store'

function Main() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Main
