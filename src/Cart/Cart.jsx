import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
const Cart = ({ cartProducts }) => {
  const [subTotal, setSubTotal] = useState(100);

  const updateSubtotal = (itemTotal) => {
    // console.log("itemTotal", itemTotal);
    // console.log("subtotal", subTotal);
    setSubTotal((prev) => prev + itemTotal);
  };
  useEffect(() => {
    console.log(subTotal);
  }, [subTotal]);
  return (
    <div className="cart-container vh-100">
      {cartProducts.map((product) => {
        return (
          <CartItem
            key={product.id}
            product={product}
            updateSubtotal={updateSubtotal}
          />
        );
      })}
      <div className="container">
        <div className="subtotal">
          <div className="left">
            <div>
              <h5>Subtotal</h5>
            </div>
            <div>
              <h5>Shipping Charges</h5>
            </div>
          </div>

          <div className="right">
            <div>
              <h5>$100</h5>
            </div>
            <div>
              <h5>Free</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
