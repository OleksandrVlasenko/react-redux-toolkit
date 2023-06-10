import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "redux/store";

export default function Counter() {
  const dispatch = useDispatch();
  console.log("Counter  dispatch:", dispatch)


  const value = useSelector(state => state.myValue)
  console.log("Counter  value:", value)
  return (
    <>
      <div>{value}</div>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(2))}>Decrement</button>
    </>
  );
}
