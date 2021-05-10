import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="link-navigation">
          <ul className="links-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className="div-icon">
          <Link to="/cart">
            <div className="cart-icon">
              <div className="cart">0</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
