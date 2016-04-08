'use strict'

function counter(state = { count: 0 }, action) {
  let count = state.count
  switch (action.type) {
    case 'increaseCounter': {
        console.log('increaseCounter');
        return { count: count + 1 }
    }
    case 'decreaseCounter': {
        console.log('decreaseCounter');
        return { count: count - 1}
    }
    default:
        return state
  }
}

export default counter