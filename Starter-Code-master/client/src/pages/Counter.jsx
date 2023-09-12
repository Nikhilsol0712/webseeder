import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/reducers/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="p-2 flex flex-col justify-center items-center gap-4 rounded bg-black">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
