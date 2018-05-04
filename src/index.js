import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFontLoader from 'webfontloader'
import {Provider} from 'react-redux'
import Index from './containers'
import sagas from './redux/sagas'
import reducer from './redux/reducers'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
const store = createStore(
  reducer,
  compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(sagas)

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Index />
    </Router>
  </Provider>,
  document.getElementById('root')
)
