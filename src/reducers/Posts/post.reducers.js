const INITIAL_STATE = {
  isFetching: false,
  fetchedData: null,
  errMessage: null,
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, isFetching: true }
    case 'FETCH_SUCCESSFUL':
      return { ...state, fetchedData: action.payload, isFetching: false }
    case 'FETCH_FAILURE':
      return { ...state, errMessage: action.payload, isFetching: false }
    default:
      return state
  }
}
