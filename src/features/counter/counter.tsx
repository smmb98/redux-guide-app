import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/app/store";

import { decrement, increment, incrementByAmount } from "./counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          type="button"
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}
