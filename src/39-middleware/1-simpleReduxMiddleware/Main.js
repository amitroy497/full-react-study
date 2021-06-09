import React from 'react'
import Home from './Home'
import reducer from './Reducers/Reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const logAction = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action)
      console.log(
        `caught in the middleware ${JSON.stringify(store.getState())}`
      )
      return result
    }
  }
}

const store = createStore(reducer, applyMiddleware(logAction))
function Main() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default Main
