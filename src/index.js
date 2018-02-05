import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import Root from 'components/container/Root'
import registerServiceWorker from 'registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducer from './reducers/Root'

const store = createStore(RootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  ,
  document.getElementById('root'))
registerServiceWorker()
