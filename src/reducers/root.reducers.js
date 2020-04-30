import { combineReducers } from 'redux'

import { postReducer } from './Posts/post.reducers'

const combinedReducers = {
  post: postReducer,
}
export default combineReducers(combinedReducers)
