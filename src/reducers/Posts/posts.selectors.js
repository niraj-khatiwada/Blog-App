import { createSelector } from 'reselect'

const selectPost = (state) => state.post

export const selectFetchedData = createSelector(
  [selectPost],
  (post) => post.fetchedData
)
export const selectIsFetching = createSelector(
  [selectPost],
  (post) => post.isFetching
)
export const selectErrorMessage = createSelector(
  [selectPost],
  (post) => post.errMessage
)
