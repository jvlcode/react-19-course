import React, { useReducer } from 'react';

// Initial state for the reducer
const initialState = { count: 0 };

// Reducer function to manage state changes based on action type
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0  ?  state.count - 1 : state.count};
    default:
      return state;
  }
}

function UseReducerExample() {
  // Use the reducer to manage the state, passing the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default UseReducerExample;
