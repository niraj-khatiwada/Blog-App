import React from 'react'
import './withSpinner.styles.css'

export default function withSpinner(ComponentToBeWrapped) {
  return ({ isFetching, ...otherProps }) => {
    return isFetching ? (
      <div className="withSpinner-container">
        <div className="spinner"></div>
      </div>
    ) : (
      <ComponentToBeWrapped {...otherProps} />
    )
  }
}
