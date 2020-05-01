import React, { useEffect } from 'react'

import { axiosFetch, startFetch } from '../reducers/Posts/posts.actions'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import {
  selectfetchedDataArray,
  selectIsFetching,
} from '../reducers/Posts/posts.selectors.jsx'

function PostList({ fetchedDataArray }) {
  return <div className="container">{fetchedDataArray} </div>
}

const mapStateToProps = createStructuredSelector({
  fetchedDataArray: selectfetchedDataArray,
})

export default connect(mapStateToProps)(PostList)
