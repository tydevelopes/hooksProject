import React from "react";
import Products from "./products";
import CartCount from "./cartCount";

export default () => {
  console.log("<Middle/> rendered");
  return (
    <div className="middle">
      <CartCount />
      <Products />
    </div>
  );
};
