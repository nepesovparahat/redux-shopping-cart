import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/actionProducts";
import { productReducer } from "../redux/reducers/productReducer";
import "../components/Detail.css";

const Details = ({ productsAll, addToCart }) => {
  const { id } = useParams();
  let productDetails = productsAll.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  const { img, name, brand, Memory, price, ram } = productDetails;

  return (
    <div className="details">
      <div className="inside-container">
        <div className="details-center">
          <div className="details-img">
            <img src={img} alt="product" />
          </div>
          <div className="details-info">
            <h2 className="details-title">
              {brand} {name}
            </h2>
            <div className="detail-phone">
              <div>
                <strong>Price:</strong> <span>{price} TL</span>
              </div>
              <div>
                <strong>Internial Memory:</strong>
                <span>{Memory}</span>{" "}
              </div>
              <div>
                <strong>Ram Capacity: </strong>
                <span>{ram}</span>
              </div>
            </div>
            <div className="details-btn">
              <Link to="/">
                <button>Back to products</button>
              </Link>
              <button onClick={() => addToCart(id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    productsAll: state.productsAll.products,
  };
};

export default connect(mapStateProps, { productReducer, addToCart })(Details);
