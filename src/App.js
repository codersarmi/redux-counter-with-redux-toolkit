import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div className="App">
      <Navbar />
      {!isLogin && <Welcome />}
      {isLogin && <Counter />}
    </div>
  );
}

export default App;
