import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'

import combinedReducers from './root.reducers'

const middleware = []

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(combinedReducers, applyMiddleware(...middleware))
