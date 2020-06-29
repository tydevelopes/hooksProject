import React, { useReducer, createContext } from "react";
import ReactDOM from "react-dom";
import Left from "./left";
import Right from "./right";
import Top from "./top";
import Middle from "./middle";
import "./productsObject";
import Notification from "./Notification";
import { initialProducts } from "./data.js";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import "./styles.css";
import { filterReducer } from "./filterReducer";
import { messageReducer } from "./messageReducer";

// Create a context to help pass data to inner components
export const ProductsContext = createContext();
export const CartListContext = createContext();

function App() {
  /**
   * useReducer is used to manage the state of your app.
   * useReducer accepts a reducer as first arguments and an initial state as second argument.
   * useReducer returns a current state and a dispatch function.
   */
  const [products, productsDispatch] = useReducer(
    productReducer,
    initialProducts
  );
  const [cartList, cartListDispatch] = useReducer(cartReducer, []);
  const [filterState, filterDispatch] = useReducer(filterReducer, "ALL");
  const [messageState, messageDispatch] = useReducer(messageReducer, {
    show: false,
    message: ""
  });

  console.log("<App/> rendered");
  return (
    <ProductsContext.Provider
      value={{
        products,
        productsDispatch,
        filterState,
        filterDispatch,
        messageDispatch
      }}
    >
      <div className="App">
        <Top />
        {messageState.show && <Notification message={messageState.message} />}
        <div className="main">
          <Left />
          <CartListContext.Provider value={{ cartList, cartListDispatch }}>
            <Middle />
            <Right />
          </CartListContext.Provider>
        </div>
      </div>
    </ProductsContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
