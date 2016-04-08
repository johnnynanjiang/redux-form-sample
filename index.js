import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'

import CounterComponent from './components/CounterComponent'
import ContactFormComponent from './components/ContactFormComponent'
import Actions from './redux/Actions'
import Store from './redux/Store'
import CounterReducer from './redux/reducers/CounterReducer'

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(Actions.IncreaseAction),
    onDecreaseClick: () => dispatch(Actions.DecreaseAction),
  }
}

// Connected Component
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent)

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
