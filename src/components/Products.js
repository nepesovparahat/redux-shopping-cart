import React from "react";
import { useSelector } from "react-redux";
import data from "../assets/data";
import Product from "./Product";

const Products = () => {
  return (
    <div className="products">
      <div className="product-center">
        <Product />
      </div>
    </div>
  );
};

export default Products;
