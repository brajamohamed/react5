import React from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../App";
const Cart = ({ setCartProducts }) => {
  const [subTotal, setSubTotal] = useState(0);

  const cartProducts = useContext(cartContext);

  const updateSubtotal = () => {
    setSubTotal(0);
    cartProducts.map((product) => {
      setSubTotal((prev) => prev + product.qty * product.price);
    });
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
            setCartProducts={setCartProducts}
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
              <h5>${subTotal}</h5>
            </div>
            <div>
              <h5>Free</h5>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="total">
          <div className="left">
            <div>Total</div>
          </div>
          <div className="right">
            <div>${subTotal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
