import React, { useEffect } from 'react'

import { axiosFetch } from '../reducers/Posts/posts.actions'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import {
  selectFetchedData,
  selectIsFetching,
  selectErrorMessage,
} from '../reducers/Posts/posts.selectors'

function PostList({ startAxiosFetch, fetchedData, isFetching }) {
  useEffect(() => {
    startAxiosFetch()
  }, [startAxiosFetch])

  const postsArray = fetchedData.map((item) => (
    <div className="row">
      <div className="col">{item.title}</div>
    </div>
  ))

  return <div className="container">{postsArray}</div>
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
  fetchedData: selectFetchedData,
  errorMessage: selectErrorMessage,
})
const mapDispatchToProps = (dispatch) => ({
  startAxiosFetch: () => dispatch(axiosFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
