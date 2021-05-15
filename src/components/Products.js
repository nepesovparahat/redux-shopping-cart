import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { productReducer } from "../redux/reducers/productReducer";
import "../components/Product.css";

const Products = ({ productsAll }) => {
  return (
    <div className="product-center">
      {productsAll.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateProps = (state) => ({
  productsAll: state.productsAll.products,
});

export default connect(mapStateProps, { productReducer })(Products);
