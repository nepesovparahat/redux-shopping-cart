import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { item } = props;
	console.log(item.img);
	return (
		<div>
			<div className="img-box">
				<Link to={`/details/${item.id}`}>
					<img src={item.img} alt="" className="images" />
				</Link>
			</div>
		</div>
	);
};

export default Product;
