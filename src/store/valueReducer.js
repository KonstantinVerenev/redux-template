const initialState = {
  stateValue: 0
}

const INCREASE_VALUE = 'INCREASE_VALUE'
const DECREASE_VALUE = 'DECREASE_VALUE'

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return { ...state, stateValue: state.stateValue + action.payload }
    case DECREASE_VALUE:
      return { ...state, stateValue: state.stateValue - action.payload }
    default:
      return state
  }
}

// ---- Action Creators ----
export const increaseAction = (payload) => ({ type: INCREASE_VALUE, payload })
export const decreaseAction = (payload) => ({ type: DECREASE_VALUE, payload })