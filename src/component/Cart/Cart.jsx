import React from "react";
import OrderReview from "../OrderReview/OrderReview";
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
  let message;
  if (cart.length===0) {
    message = <p>Add some data buddy</p>
  }

  return (
    <div>
      <h2 className={cart.length>1 ? 'blue': 'yellow' }>
        Order summary : {cart.length}
      </h2>
      {message}
      {
        cart.length>3 ? <span>your are rich. add more order</span>
        : 
        <span className={`bold ${cart.length>2?'green':'gray'}`}>You are a gorib bro</span>
      }
      {/* this is logical contional rendaring  */}
      
      {
        cart.length>2 && <p>adding data more than 2</p>
      }

        {/* this is conditional rendaring if it fals */}
        
      
      {cart.map(tshart => {
        return (
          <p key={tshart._id}
          >
            {tshart.name} <button
            onClick={()=>handleRemoveCart(tshart._id)}>Close</button>
          </p>
        );
      })}
    
    {
          cart.length === 3 || <h3>tinta to hoilo na</h3>
        }</div>
  );
};

export default Cart;
