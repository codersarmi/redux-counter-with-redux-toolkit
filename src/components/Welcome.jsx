import { useDispatch } from "react-redux";
import { authAction } from "../Store/AuthReducer";
import "./Welcome.css";

const Welcome = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authAction.login());
  };
  return (
    <section className="welcome">
      <button onClick={loginHandler}>Log in to Redux Counter</button>
    </section>
  );
};

export default Welcome;
