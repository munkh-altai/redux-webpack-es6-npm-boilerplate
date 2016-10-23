import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
let store = createStore(todoApp)

export const ModuleName = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ModuleName
