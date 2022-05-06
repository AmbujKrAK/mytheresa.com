import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Men } from "./components/Men";
import { Womens } from "./components/Womens";
import { Kid } from "./components/Kids";
import Heads from "./components/webview/header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Heads />
      <Navbar />
      <Routes>
        <Route path="" element={<Womens />}></Route>
        <Route path="/women" element={<Womens />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/kid" element={<Kid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
