import React from 'react'
import Home from './Home'
import reducer from './Reducers/Reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

function Main() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Main
