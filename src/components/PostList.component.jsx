import React, { useEffect } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import {
  toggleFetch,
  fetchSuccessful,
  fetchFailure,
} from '../reducers/Posts/posts.actions'

function PostList({
  isFetching,
  toggleFetch,
  fetchData,
  err,
  fetchError,
  fetchedData,
}) {
  useEffect(() => {
    const axiosFetch = async () => {
      await axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(async (res) => await fetchData(res.data.slice(0, 1)))
        .catch((err) => fetchError(err.response.status))
    }
    axiosFetch()
  }, [isFetching])

  return (
    <div>
      <h1>{fetchedData[0].id}</h1>
      <button onClick={() => toggleFetch()}>click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetching: state.post.isFetching,
  fetchedData: state.post.fetchedData,
  err: state.post.err,
})

const mapDispatchToProps = (dispatch) => ({
  toggleFetch: () => dispatch(toggleFetch()),
  fetchData: (data) => dispatch(fetchSuccessful(data)),
  fetchError: (err) => dispatch(fetchFailure(err)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
