import React from "react";
import "./Product.css";

const Product = (props) => {
	return (
		<>
			<div className='product-container'>
				<div className='product-image-section'>
					<img src={props.product.image} alt={props.product.name} />
				</div>
				<h3>{props.product.name}</h3>
				<p>{props.product.about}</p>
				<span>{props.product.price}</span>
				<p className='shoes-size'>
					Size : {props.product.size.join(",")}
				</p>
			</div>
		</>
	);
};

export default Product;
