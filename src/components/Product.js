import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { item } = props;
  const products = useSelector((state) => state.productsAll.products);
  const datarender = products.map((product) => {
    const { id, name, Memory, price, img } = product;
    return (
      <div key={id} className="product">
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
  });
  return <> {datarender} </>;
};

export default Product;
