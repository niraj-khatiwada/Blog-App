const INITIAL_STATE = {
  isFetching: false,
  fetchedData: null,
  err: null,
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_FETCH':
      return { ...state, isFetching: !state.isFetching }
    case 'FETCH_SUCCESSFUL':
      return { ...state, fetchedData: action.payload }
    case 'FETCH_FAILURE':
      return { ...state, err: action.payload }
    default:
      return state
  }
}
