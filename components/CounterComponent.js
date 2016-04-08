'use strict'

import React, { Component, PropTypes } from 'react'

class CounterComponent extends Component {
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

CounterComponent.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired
}

export default CounterComponent