import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  console.log(cart);

  console.log(value);

  return (
    <div className="container-fluid text-center ">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
