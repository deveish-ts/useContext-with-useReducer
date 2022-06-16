import React, { useReducer } from 'react';
import Context from './context';

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === 'Increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'Decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return initialState;
};

// ================================

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementHandler = () => {
    dispatch({
      type: 'Increment',
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: 'Decrement',
    });
  };
  const stateValue = {
    counter: state.counter,
    increment: incrementHandler,
    decrement: decrementHandler,
  };
  return (
    <Context.Provider value={stateValue}>{props.children}</Context.Provider>
  );
};

export default Provider;
