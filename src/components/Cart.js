import React from "react";
import iphone from "../assets/images/ihone8.jpg";
import rmv from "../assets/images/remove.svg";

const Cart = () => {
	return (
		<div className="cart-container">
		<div className="cart-list">
					<div className="cart-info">
						<div className="item-img">
							<img src={iphone} className="img-cart" alt="img" />
						</div>
						<div className="product-info">
							<div className="product_inf_detail">Name name ame name ame name ame</div>
							
							<div className="quantity">
								<div className="quantity-inside">
									<button>+</button>
									<span>quantity:</span>
									<button>-</button>
								</div>
							</div>
              
						</div>
            <div className="hover-remove">
								<div className="delete-product">
									<img src={rmv} alt="icon" className="rmv-icon" />
								</div>
							</div>
					</div>
				</div>
        <div className="cart-list">
					<div className="cart-info">
						<div className="item-img">
							<img src={iphone} className="img-cart" alt="img" />
						</div>
						<div className="product-info">
							<div className="product_inf_detail">Name name ame name ame name ame</div>
							
							<div className="quantity">
								<div className="quantity-inside">
									<button>+</button>
									<span>quantity:</span>
									<button>-</button>
								</div>
							</div>
              
						</div>
            <div className="hover-remove">
								<div className="delete-product">
									<img src={rmv} alt="icon" className="rmv-icon" />
								</div>
							</div>
					</div>
				</div>
		
    
    </div>
		// <div className="shop-cart">
		//     <div className="cart-container">
		//       <h3>Cart Products</h3>
		//       <div className="cart-center">
		//         <div className="info-cart">
		//           <div className="sngl-cart">
		//             <div className="cart-img">
		//               </div>
		//               <div className="cart-head item">
		//                 <h4>title</h4>
		//               </div>
		//               <div className="quantity-cart">
		//                 <button>-</button>
		//                 <span>0</span>
		//                 <button>+</button>
		//                 </div>
		//                 <div className="price-cart">
		//                   <h4>$45</h4>
		//                   </div>
		//                 <div className="delete-item">
		//                   </div>
		//                   <div className="total">
		//                     <h3>Total</h3>
		//                   </div>
		//             </div>
		//           </div>
		//         </div>

		//     </div>
		// </div>
	);
};

export default Cart;
