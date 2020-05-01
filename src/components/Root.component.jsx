import React, { useEffect } from 'react'
import PostList from './PostList.component'
import withSpinner from './Spinner/withSpinner.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../reducers/Posts/posts.selectors'

import { axiosFetch } from '../reducers/Posts/posts.actions'

import { Route } from 'react-router-dom'

const PostListWithSpinner = withSpinner(PostList)

function Root({ isFetching, startAxiosFetch }) {
  useEffect(() => {
    startAxiosFetch()
  }, [startAxiosFetch])
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => <PostListWithSpinner isFetching={isFetching} />}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsFetching,
})

const mapDispatchToProps = (dispatch) => ({
  startAxiosFetch: () => dispatch(axiosFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)
