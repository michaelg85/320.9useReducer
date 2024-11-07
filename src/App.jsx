import { useReducer, useState, useEffect } from 'react';
import numReducer from './utilities/numReducer.mjs';
import ACTION from './utilities/numReducerAction.mjs';
import './App.css';

function App() {
  const [changeValue, setChangeValue] = useState(0);
  const [state, dispatch] = useReducer(numReducer, { count: 0 });

  return (
    <main>
      <button
        onClick={() => {
          dispatch({ type: ACTION.DECREMENT });
        }}
      >
        -
      </button>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: ACTION.INCREMENT });
        }}
      >
        +
      </button>
      <br />
      <input
        type='number'
        onChange={(e) => {
          setChangeValue(e.target.value);
        }}
      />{' '}
      <br />
      <button
        onClick={() => {
          dispatch({ type: ACTION.ADDBYVALUE, payload: changeValue });
        }}
      >
        Increment By Value
      </button>{' '}
      <br />
      <button
        onClick={() => {
          dispatch({ type: ACTION.SUBBYVALUE, payload: changeValue });
        }}
      >
        Decreament By Value
      </button>{' '}
      <br />
    </main>
  );
}

export default App;