import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/actionProducts";
import { setProducts } from "../redux/actions/actionProducts";
import "../components/Product.css";

const Product = ({ product, addToCart }) => {
  const { id, name, Memory, price, img } = product;
  return (
    <div className="product">
      <Link to={`/details/${id}`}>
        <div className="img-box">
          <img src={img} alt="" className="images" />
        </div>
        <div className="product-details">
          <span> {name} </span>
          <span> {Memory} </span>
          <br />
          <strong> {price} TL </strong>
        </div>
      </Link>
      <div className="add-btn-div">
        <button onClick={() => addToCart(id)} className="add-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(null, mapDispatchProps)(Product);
