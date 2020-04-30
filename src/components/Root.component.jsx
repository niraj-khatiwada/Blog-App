import React, { useState } from 'react'
import PostList from './PostList.component'
import withSpinner from './Spinner/withSpinner.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsFetching } from '../reducers/Posts/posts.selectors'

import { Route } from 'react-router-dom'

const PostListWithSpinner = withSpinner(PostList)

function Root({ isfetching }) {
  const [isLoading, setLoading] = useState(isfetching)
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => <PostListWithSpinner isFetching={isLoading} />}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isfetching: selectIsFetching,
})

export default connect(mapStateToProps)(Root)
