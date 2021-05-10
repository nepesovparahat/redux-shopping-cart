import React, { useState } from "react";
import data from "../assets/data";
import Product from "./Product";

const Products = () => {
  const [product, setproduct] = useState(data);

  return (
    <div className="products">
      <div className="product-center">
        {product.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
