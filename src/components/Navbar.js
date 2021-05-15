import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../components/Navbar.css";

const Navbar = ({ cart }) => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="link-navigation">
          <ul className="links-nav">
            <li>
              <Link to="/products">
                <span>Shopping Cart</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <div className="div-icon">
            <span>Cart</span>

            <div className="cart-icon">
              <div className="cart">
                <div className="cart-count">{cart.length}</div>
              </div>
            </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    cart: state.productsAll.cart,
  };
};

export default connect(mapStateProps)(Navbar);
