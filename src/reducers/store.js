import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import combinedReducers from './root.reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middleware))
)
