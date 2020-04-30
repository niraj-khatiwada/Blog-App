import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import combinedReducers from './root.reducers'

const middleware = [thunk]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(combinedReducers, applyMiddleware(...middleware))
