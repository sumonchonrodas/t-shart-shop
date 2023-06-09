import React from "react";
import OrderReview from "../OrderReview/OrderReview";

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div>
      <h2>
        Order summary : {cart.length}
      </h2>
      {cart.map(tshart => {
        return (
          <p key={tshart._id}
          >
            {tshart.name} <button
            onClick={()=>handleRemoveCart(tshart._id)}>X</button>
          </p>
        );
      })}
    </div>
  );
};

export default Cart;
