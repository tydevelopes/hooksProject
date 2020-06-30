import React, { useContext } from "react";
import CartProducts from "./CartProducts";
import CartTotal from "./CartTotal";
import CartCount from "./cartCount";
import { CartListContext } from "../index";

export default () => {
  const { cartList } = useContext(CartListContext);
  console.log("<Right/> rendered");
  return cartList.length === 0 ? null : (
    <div className="right">
      <CartCount />
      <CartProducts />
      <CartTotal />
    </div>
  );
};
