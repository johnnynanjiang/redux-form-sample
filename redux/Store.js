 'use strict'
 
import { combineReducers, createStore } from 'redux'
import {reducer as formReducer} from 'redux-form'
 
import CounterReducer from './reducers/CounterReducer'
 
let reducers = combineReducers({counter: CounterReducer})

let store = createStore(reducers)

export default store
