import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../assets/data";

const Details = (props) => {
  const { id } = useParams();
  let productDetails = data.find((item) => parseInt(item.id) === parseInt(id));
  console.log(productDetails, "deatil", id, "id");
  return <div className="cart-details">{productDetails.brand}</div>;
};

export default Details;
