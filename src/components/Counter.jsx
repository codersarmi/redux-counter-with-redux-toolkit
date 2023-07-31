import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../Store/CounterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);
  const increaseHlandler = () => {
    dispatch(counterAction.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterAction.decrease());
  };
  const increaseBy5 = () => {
    dispatch(counterAction.increaseBy5(5));
  };
  const toggleHandler = () => {
    dispatch(counterAction.toggle());
  };
  return (
    <section className="counter">
      <h1>Redux Counter</h1>
      {isShow && <h2>{counter}</h2>}
      <hr />
      <div className="counter_btns">
        <button className="counter-btn" onClick={increaseHlandler}>
          Increase
        </button>
        <button className="counter-btn" onClick={increaseBy5}>
          Increaseby5
        </button>
        <button className="counter-btn" onClick={decreaseHandler}>
          Decrease
        </button>
        <button className="counter-btn" onClick={toggleHandler}>
          Toggle
        </button>
      </div>
    </section>
  );
};

export default Counter;
