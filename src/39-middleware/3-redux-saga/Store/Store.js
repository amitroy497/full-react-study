import reducer from './../Reducers/Reducer'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watchAgeUp } from './../Sagas/Saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp)

export default store
