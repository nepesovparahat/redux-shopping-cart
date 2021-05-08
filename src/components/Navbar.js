import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png";
const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="nav">
				<div className="logobtn">
					<Link to="/">
						<img src={logo} alt="logo" className="nav-logo" />
					</Link>
					<div className="cart-icon shopping-mb">
						<div className="cart"><span>0</span></div>
					</div>
                    <div className="hamburger">
                     <div className="bar"></div>
                     <div className="bar"></div>
                     <div className="bar"></div>
                 </div>
				</div>
				<div className="links">
					<div className="link-navigation">
						<div className="link-btn">
							<span>×</span>
						</div>
						<ul className="links-nav">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/products">Products</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</div>
				<Link to="/cart">
					<div className="cart-icon">
						<span className="cart">0</span>
					</div>
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
