import React, { useEffect } from 'react'

import { axiosFetch } from '../reducers/Posts/posts.actions'
import { connect } from 'react-redux'

function PostList({ startAxiosFetch }) {
  useEffect(() => {
    startAxiosFetch()
  }, [])
  return (
    <div>
      <button>click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetching: state.post.isFetching,
  fetchedData: state.post.fetchedData,
  errorMessage: state.post.errMessage,
})

const mapDispatchToProps = (dispatch) => ({
  startAxiosFetch: () => dispatch(axiosFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
