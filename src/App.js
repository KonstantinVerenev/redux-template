import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addUserAction, fetchManuUsersThunk, removeUserAction } from './store/usersReducer';
import { decreaseAction, increaseAction } from './store/valueReducer';

function App() {
  const dispatch = useDispatch()
  const stateValue = useSelector(state => state.value.stateValue)
  const users = useSelector(state => state.users.users)

  const increase = (value) => {
    dispatch(increaseAction(value))
  }

  const decrease = (value) => {
    dispatch(decreaseAction(value))
  }

  const addUser = (name) => {
    const user = {
      name,
      id: Date.now()
    }
    dispatch(addUserAction(user))
  }

  const removeUser = (user) => {
    dispatch(removeUserAction(user.id))
  }

  return (
    <div>
      <div>
        <h2>{stateValue}</h2>
        <button onClick={() => { increase(Number(prompt())) }}>INCREASE</button>
        <button onClick={() => { decrease(Number(prompt())) }}>DECREASE</button>
        <button onClick={() => { addUser(prompt()) }}>ADD USER</button>
        <button onClick={() => { dispatch(fetchManuUsersThunk()) }}>ADD USERS FROM SERVER</button>
      </div>
      <div>
        {users.length > 0
          ?
          <div>{users.map(user => <div className='user' key={user.id} onClick={() => { removeUser(user) }}>{user.name}</div>)}</div>
          :
          <div><h3>Клиент отсутствуют</h3></div>}
      </div>
    </div >
  );
}

export default App;
