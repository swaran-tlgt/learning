import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      age: state.age - 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <br></br>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <br></br>
      <br></br>
      <button onClick={() => {
        dispatch({ type: 'decrement' })
      }}>
        Decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
