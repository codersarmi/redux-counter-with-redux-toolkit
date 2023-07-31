import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { authAction } from "../Store/AuthReducer";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <nav>
      <h1>Redux Counter</h1>
      {isLogin && (
        <ul>
          <li>My Record</li>
          <li>Profile</li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
