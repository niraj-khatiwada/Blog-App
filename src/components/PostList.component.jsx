import React, { useEffect } from 'react'

import { axiosFetch } from '../reducers/Posts/posts.actions'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import {
  fetchedDataArray,
  selectIsFetching,
} from '../reducers/Posts/posts.selectors.jsx'

function PostList({ startAxiosFetch, fetchedDataArray, isFetching }) {
  useEffect(() => {
    // startAxiosFetch()
  }, [isFetching])

  return <div className="container">{fetchedDataArray} </div>
}

const mapStateToProps = createStructuredSelector({
  fetchedDataArray: fetchedDataArray,
  isFetching: selectIsFetching,
})
const mapDispatchToProps = (dispatch) => ({
  startAxiosFetch: () => dispatch(axiosFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
