import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  // const count = useSelector((state) => state.counter.value);
  const count = 0;
  console.log(useSelector((state) => state))
  const dispatch = useDispatch();
  // console.log((increment()))
  return (
    <div>
      <p>Giá trị: {count}</p>
      {/* <h1>{}</h1> */}
      <button onClick={() => dispatch(increment())}>Tăng</button>
      <button onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
}

export default Counter;
