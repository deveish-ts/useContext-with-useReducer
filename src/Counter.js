import React, { useContext } from 'react';
import Context from './store/context';
const Counter = () => {
  const { counter, increment, decrement } = useContext(Context);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default Counter;
