import React from 'react'

import { connect } from 'react-redux'
import { isFetching } from '../reducers/Posts/posts.actions'

function PostList({ isFetching }) {
  console.log(isFetching)
  return (
    <div>
      <button onClick={() => isFetching}>click</button>
    </div>
  )
}

const mapDipatchToProps = (state) => ({
  isFetching: isFetching(state),
})

export default connect(null, mapDipatchToProps)(PostList)
