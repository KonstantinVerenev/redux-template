const initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, stateValue: state.stateValue + action.payload }
    case "GET_USERS":
      return { ...state, stateValue: state.stateValue - action.payload }
    default:
      return state
  }
}