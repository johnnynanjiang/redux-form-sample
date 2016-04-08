import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import CounterComponent from './components/CounterComponent'
import ContactFormComponent from './components/ContactFormComponent'
import Store from './redux/Store'
import CounterReducer from './redux/reducers/CounterReducer'
import Actions from './redux/Actions'

class App extends React.Component {
  handleSubmit(data) {
    console.log('Submission received!', data);
  }

  render() {
    return (
      <Provider store={Store}>
        <ContactFormComponent onSubmit={
            (data) => {
                Store.dispatch(Actions.IncreaseCounter);
            }
        } />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
