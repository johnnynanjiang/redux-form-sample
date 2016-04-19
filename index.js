import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './redux/Store'
import CounterComponent from './components/CounterComponent'
import UserFormComponent from './components/UserFormComponent'
import ActionCreators from './redux/ActionCreators'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <CounterComponent />
          <hr/>
          <UserFormComponent />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
