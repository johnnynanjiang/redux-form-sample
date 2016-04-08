'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Actions from '../redux/Actions'

class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props

    return (
      <div>
        <button onClick={onIncreaseClick}>+</button>
        <span style={{padding: 10}}>{value}</span>
        <button onClick={onDecreaseClick}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
}

// Map Redux state to component props
function mapStateToProps(state) {
  let thisState = state.counter;
  return {
    value: thisState.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(Actions.IncreaseCounter),
    onDecreaseClick: () => dispatch(Actions.DecreaseCounter),
  }
}

// Connected Component
let CounterComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterComponent