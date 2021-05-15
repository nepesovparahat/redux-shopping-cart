import React, { useEffect, useState } from "react";
import rmv from "../assets/images/remove.svg";
import inc from "../assets/images/increase.png";
import decr from "../assets/images/decrease.png";
import { connect } from "react-redux";
import {
  removeCart,
  itemIncrease,
  itemDecrease,
} from "../redux/actions/actionProducts";
import "../components/Cart.css";

const Cart = ({ cart, removeCart, itemIncrease, itemDecrease }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h3>Cart is currently empty</h3>
      ) : (
        <>
          {" "}
          <div className="cart-list-head">
            <strong>Product</strong>
            <strong className="head-price">Price</strong>
            <strong className="head-total">Total</strong>
          </div>
          {cart.map((item) => (
            <>
              <div className="cart-list" key={item.id}>
                <div className="cart-info">
                  <div className="item-img">
                    <img src={item.img} className="img-cart" alt="img" />
                  </div>
                  <div className="product-info">
                    <div className="product_inf_detail">
                      <strong>{item.name}</strong>
                    </div>
                    <div className="price">
                      <strong className="price-child">{item.price} TL</strong>
                    </div>
                    <div className="price total">
                      <strong>{item.price * item.quantity} TL</strong>
                    </div>
                    <div className="quantity">
                      <div className="quantity-inside">
                        <a onClick={() => itemIncrease(item.id)}>
                          <img src={inc} alt="increase" className="increase" />
                        </a>
                        <span>{item.quantity}</span>
                        <a onClick={() => itemDecrease(item.id)}>
                          <img src={decr} alt="decrease" className="decrease" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hover-remove">
                    <div className="delete-product">
                      <img src={rmv} alt="icon" onClick={() => removeCart(item.id)} className="rmv-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </>
      )}

      {cart.length === 0 ? null : (
        <div className="total-cart">
          <span className="total-text">Total:</span>
          <span>{totalPrice} TL</span>
        </div>
      )}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps, {removeCart,itemIncrease,itemDecrease})(Cart);
