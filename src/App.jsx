import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import { Cart } from "./components/CartComp/Cart";
import { Login_Signup } from "./components/Login/Login_Signup";
// import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Navbar from "./components/Navbar";
import Heads from "../src/components/Navbar/webview/header";
import { Footer } from "./components/Footer/Footer";
import Web from "./components/Navbar/webview/web";
import { Men } from "./components/Home/Men";
import { Womens } from "./components/Home/Womens";

function App() {
  return (
    <div className="App">
      <Heads />
      <Navbar />
      <Web />
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/men" component={Men} />
          <Route path="/Women" component={Womens} />
          <Route path="/products" component={ProductListing} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/login" component={Login_Signup} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
