const INITIAL_STATE = {
  isFetching: false,
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_FETCH':
      return { ...state, isFetching: !state.isFetching }
    default:
      return state
  }
}
