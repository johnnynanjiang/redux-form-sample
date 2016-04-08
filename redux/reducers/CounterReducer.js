'use strict'

function counter(state = { count: 0 }, action) {
  let count = state.count
  switch (action.type) {
    case 'increaseCounter':
        return { count: count + 1 }
    case 'decreaseCounter':
        return { count: count - 1}
    default:
        return state
  }
}

export default counter