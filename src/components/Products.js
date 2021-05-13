import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { productReducer } from "../redux/reducers/productReducer";

const Products = ({ productsAll }) => {
  return (
    <div className="products">
      <div className="product-center">
        {productsAll.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateProps = (state) => ({
  productsAll: state.productsAll,
});

export default connect(mapStateProps, { productReducer })(Products);
