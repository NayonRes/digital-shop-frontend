import React from "react";
import { Switch, Route } from "react-router-dom";
import CartItems from "./CartItems";
import Product from "./Product";
import Message from "./Message";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Test from "./test/Test";
import Test2 from "./test/Test2";
import Test3 from "./test/Test3";

const Navigation = () => {
  return (
    <>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/test2">
          <Test2 />
        </Route>
        <Route path="/test3">
          <Test3 />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/cart">
          <CartItems />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;
