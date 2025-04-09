import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./storeredux";
const Todo= () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div
    >
      <div>Count:{count}</div>
      
            <button onClick={() => dispatch(increment(1))}>Increment</button>
            <button onClick={() => dispatch(decrement(1))}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>


      
    </div>
  );
};

export default Todo;