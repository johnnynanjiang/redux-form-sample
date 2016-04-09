 'use strict'
 
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
 
import CounterReducer from './reducers/CounterReducer'
 
let reducers = combineReducers({counter: CounterReducer, form: formReducer})

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers)

export default store
