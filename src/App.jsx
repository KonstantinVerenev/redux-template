import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const stateValue = useSelector(state => state.value.stateValue)

  const increase = (value) => {
    dispatch({ type: "INCREASE_VALUE", payload: value })
  }

  const decrease = (value) => {
    dispatch({ type: "DECREASE_VALUE", payload: value })
  }

  return (
    <div>
      <h2>{stateValue}</h2>
      <button onClick={() => { increase(Number(prompt())) }}>INCREASE</button>
      <button onClick={() => { decrease(Number(prompt())) }}>DECREASE</button>
    </div>
  );
}

export default App;
