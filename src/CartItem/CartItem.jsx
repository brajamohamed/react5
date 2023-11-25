import React, { useEffect } from "react";
import "./CartItem.css";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../App";
const CartItem = ({ product, updateSubtotal, setCartProducts }) => {
  let cartProducts = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const qtyRef = useRef();
  const [qty, setQty] = useState(1);
  const [id, setid] = useState(0);

  const handleQty = (id) => {
    setQty(qtyRef.current.value);
    setid(id);
  };

  useEffect(() => {
    updateTotal();
  }, [qty]);

  useEffect(() => updateSubtotal(), [cartProducts]);

  const updateTotal = () => {
    const updatedCartProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.id === id) {
        return { ...cartProduct, qty: qty };
      } else {
        return cartProduct;
      }
    });
    setCartProducts(updatedCartProducts);
    setTotal(qty * product.price);
  };

  return (
    <div className="cartItem container">
      <div className="cartItem-left">
        <div className="product-img me-3">
          <img src={product.thumbnail} alt="product-img" />
        </div>
        <div className="d-flex flex-column">
          <div className="fw-bolder">{product.title}</div>
          <div>{product.description}</div>
        </div>
      </div>
      <div className="cartItem-right">
        <div className="mx-5">
          <select
            ref={qtyRef}
            value={qty}
            onChange={() => handleQty(product.id)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div>${total}</div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
