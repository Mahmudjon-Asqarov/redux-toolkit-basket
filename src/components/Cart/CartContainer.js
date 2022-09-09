import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
function CartContainer() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  console.log(items, "jdlskfjhlkdsjhflkjdh");

  return (
    <div className="container">
      <h3 className="lead-mb-0 mt-4">Products</h3>
      <div className="wrapper_cart">
        {items?.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CartContainer;
