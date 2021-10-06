const initialState = {
  stateValue: 0
}

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_VALUE":
      return { ...state, stateValue: state.stateValue + action.payload }
    case "DECREASE_VALUE":
      return { ...state, stateValue: state.stateValue - action.payload }
    default:
      return state
  }
}