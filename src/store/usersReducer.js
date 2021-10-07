const initialState = {
  users: []
}

const ADD_USER = 'ADD_USER'
const ADD_MANY_USERS = 'ADD_MANY_USERS'
const REMOVE_USER = 'REMOVE_USER'

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] }
    case ADD_MANY_USERS:
      return { ...state, users: [...state.users, ...action.payload] }
    case REMOVE_USER:
      return { ...state, users: state.users.filter(user => user.id !== action.payload) }
    default:
      return state
  }
}

// ---- Action Creators ----
export const addUserAction = (payload) => ({ type: ADD_USER, payload })
export const addManyUsersAction = (payload) => ({ type: ADD_MANY_USERS, payload })
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload })