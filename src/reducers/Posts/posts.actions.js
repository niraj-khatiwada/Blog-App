import axios from 'axios'

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

const axiosFetch = async () => {
  await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(async (res) => await fetchData(res.data.slice(0, 1)))
    .catch((err) => fetchError(err.response.status))
}

export const toggleFetch = () => ({ type: 'TOGGLE_FETCH' })
