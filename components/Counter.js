'use strict'

import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  render() {

    const { value, onIncreaseClick, onDecreaseClick } = this.props

    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>+</button>
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

export default Counter