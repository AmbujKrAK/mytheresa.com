import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import {Cart} from "./components/CartComp/Cart"
import { Login_Signup } from "./components/Login/Login_Signup";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/cart" component={Cart}/>
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/login" component={Login_Signup}/>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
