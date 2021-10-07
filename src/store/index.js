import { createStore, combineReducers, applyMiddleware } from "redux";
import { valueReducer } from "./valueReducer";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  value: valueReducer,
  users: usersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))