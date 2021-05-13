import React from "react";
import iphone from "../assets/images/ihone8.jpg";
import rmv from "../assets/images/remove.svg";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-list">
        <div className="cart-info">
          <div className="item-img">
            <img src={iphone} className="img-cart" alt="img" />
          </div>
          <div className="product-info">
            <div className="product_inf_detail">
              Name name ame name ame name ame
            </div>

            <div className="quantity">
              <div className="quantity-inside">
                <button>+</button>
                <span>quantity:</span>
                <button>-</button>
              </div>
            </div>
          </div>
          <div className="hover-remove">
            <div className="delete-product">
              <img src={rmv} alt="icon" className="rmv-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-list">
        <div className="cart-info">
          <div className="item-img">
            <img src={iphone} className="img-cart" alt="img" />
          </div>
          <div className="product-info">
            <div className="product_inf_detail">
              Name name ame name ame name ame
            </div>

            <div className="quantity">
              <div className="quantity-inside">
                <button>+</button>
                <span>quantity:</span>
                <button>-</button>
              </div>
            </div>
          </div>
          <div className="hover-remove">
            <div className="delete-product">
              <img src={rmv} alt="icon" className="rmv-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="total-cart">
        <span>23 TL</span>
      </div>
    </div>
  );
};

export default Cart;
