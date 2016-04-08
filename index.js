import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CounterComponent from './components/CounterComponent'
import ContactFormComponent from './components/ContactFormComponent'

import Store from './redux/Store'
import CounterReducer from './redux/reducers/CounterReducer'

ReactDOM.render(
  <Provider store={Store}>
    <ContactFormComponent />
  </Provider>,
  document.getElementById('root')
)
