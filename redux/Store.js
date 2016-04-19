'use strict'
 
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {
    modelReducer,
    formReducer
} from 'react-redux-form';

const initialUserState = {
    firstName: '',
    lastName: ''
};

import CounterReducer from './reducers/CounterReducer'
 
let reducers = combineReducers({
    counter: CounterReducer,
    user: modelReducer('user', initialUserState),
    userForm: formReducer('user')
})

let store = applyMiddleware(thunkMiddleware)(createStore)(reducers)

export default store
