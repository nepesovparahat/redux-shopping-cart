import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../redux/actions/actionProducts";
const Product = ({ setProducts, product }) => {
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
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};
export default connect(null, mapDispatchProps)(Product);
