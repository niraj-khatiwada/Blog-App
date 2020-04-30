const INITIAL_STATE = {
  isFetching: false,
}

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return { ...state, isFetching: true }
    default:
      return state
  }
}
