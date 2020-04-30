import axios from 'axios'

export const startFetch = () => ({
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

export const axiosFetch = () => {
  return async (dispatch) => {
    dispatch(startFetch())
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => dispatch(fetchSuccessful(res.data)))
      .catch((err) => dispatch(fetchFailure(err)))
  }
}

export const toggleFetch = () => ({ type: 'TOGGLE_FETCH' })
