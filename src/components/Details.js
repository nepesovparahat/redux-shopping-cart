import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Details = (props) => {
  const { id } = useParams();
  const product = useSelector((state) => state.productsAll.products);
  let productDetails = product.find(
    (item) => parseInt(item.id) === parseInt(id)
  );
  const { img, name, brand, Memory, price, date, ram } = productDetails;

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
              <Link to="/products">
                <button>Back to products</button>
              </Link>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
