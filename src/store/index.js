import { createStore, combineReducers } from "redux";
import { valueReducer } from "./valueReducer";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  value: valueReducer,
  users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools())