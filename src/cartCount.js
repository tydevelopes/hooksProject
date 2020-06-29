import React, { useContext } from "react";
import { CartListContext } from "./index";

const CartCount = () => {
  const { cartList } = useContext(CartListContext);

  console.log("<CartCount/> rendered");

  return (
    <div className="cart-count">
      Items in Cart: {cartList.reduce((prev, curr) => prev + curr.count, 0)}
    </div>
  );
};
export default CartCount;
