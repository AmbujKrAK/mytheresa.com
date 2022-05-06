import { Signin } from "./components/Signin";
import { SignUp } from "./components/SignUp";
import { Cart } from "./components/CartComp/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="Auth">
        <div><SignUp /></div>
        <div className="line"></div>
        <div><Signin /></div>


      </div>
    </div>
  );
}

export default App;
