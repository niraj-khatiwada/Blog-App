import React from 'react'

import { connect } from 'react-redux'
import { toggleFetch } from '../reducers/Posts/posts.actions'

function PostList({ isFetching, toggleFetch }) {
  return (
    <div>
      <h1>{`${isFetching}`}</h1>
      <button onClick={() => toggleFetch()}>click</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isFetching: state.post.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  toggleFetch: () => dispatch(toggleFetch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
