export const isFetching = () => ({
  type: 'FETCH_START',
})

export const fetchSuccessful = (data) => ({
  type: 'FETCH_SUCCESSFUL',
  payload: data,
})

export const fetchFailure = (err) => ({
  type: 'FETCH_FAILURE',
  payload: err,
})

export const toggleFetch = () => ({ type: 'TOGGLE_FETCH' })
