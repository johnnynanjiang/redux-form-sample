import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './redux/Store'
import CounterComponent from './components/CounterComponent'
import ContactFormComponent from './components/ContactFormComponent'
import CounterReducer from './redux/reducers/CounterReducer'
import ActionCreators from './redux/ActionCreators'

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <ContactFormComponent onSubmit={
            (data) => {
                Store.dispatch(ActionCreators.FormSubmitActionCreator(data));
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
