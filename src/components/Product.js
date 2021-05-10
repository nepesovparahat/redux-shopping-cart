import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { item } = props;
  return (
    <div className="product">
      <div className="img-box">
        <Link to={`/details/${item.id}`}>
          <img src={item.img} alt="" className="images" />
        </Link>
      </div>
      <div className="product-details">
        <span> {item.name} </span>
        <span> {item.Memory} </span>
        <br />
        <span> {Math.round(item.price)} tl </span>
      </div>
      <div className="add-btn">
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
