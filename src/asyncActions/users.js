import { addManyUsersAction } from "../store/usersReducer"

// ---- Thunk creator ----
export const fetchManuUsersThunk = () => {
  // ---- async thunk with dispatch action ----
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => dispatch(addManyUsersAction(response)))
  }
}