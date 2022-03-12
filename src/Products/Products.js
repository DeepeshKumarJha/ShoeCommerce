import React, { useState } from "react";
import Product from "./Product/Product";
import Filters from "./Filters/Filters";
import "./Products.css";
import p1 from "./images/p1.webp";
import p2 from "./images/p2.webp";
import p3 from "./images/p3.webp";
import p4 from "./images/p4.jpg";
import p5 from "./images/p5.webp";
import p6 from "./images/p6.webp";
import p7 from "./images/p7.webp";
import p8 from "./images/p8.webp";
import p9 from "./images/p9.webp";
import p10 from "./images/p10.webp";
import p11 from "./images/p11.webp";
import p12 from "./images/p12.webp";
import p13 from "./images/p13.webp";
import p14 from "./images/p14.webp";
import p15 from "./images/p15.webp";
import p16 from "./images/p16.webp";
import p17 from "./images/p17.webp";
import p18 from "./images/p18.webp";
import p19 from "./images/p19.webp";
import p20 from "./images/p20.webp";

const ProductList = [
	{
		id: 1,
		name: "Nike React Infinity Run Flyknit 3",
		price: 13995,
		category: "running",
		size: [5, 5.5],
		image: p1,
		about: "Men's Road Running Shoes",
	},
	{
		id: 2,
		name: "Nike Air Zoom Alphafly NEXT% Flyknit",
		price: 22795,
		category: "running",
		size: [6, 6.5, 5],
		image: p2,
		about: "Men's Road Racing Shoes",
	},
	{
		id: 3,
		name: "Nike ZoomX Vaporfly Next% 2",
		price: 19695,
		category: "running",
		size: [7, 7.5, 6],
		image: p3,
		about: "Men's Road Racing Shoes",
	},
	{
		id: 4,
		name: "Nike Air VaporMax 2021 FK SE",
		price: 18695,
		category: "running",
		size: [5, 5.5, 7],
		image: p4,
		about: "Men's Shoes",
	},
	{
		id: 5,
		name: "Nike Renew Run 3",
		price: 7495,
		category: "running",
		size: [6, 6.5],
		image: p5,
		about: "Men's Road Running Shoes",
	},
	{
		id: 6,
		name: "Giannis Immortality",
		price: 6795,
		category: "basketball",
		size: [7, 7.5],
		image: p6,
		about: "Basketball Shoes",
	},
	{
		id: 7,
		name: "Kyrie Infinity EP",
		price: 11895,
		category: "basketball",
		size: [5, 5.5],
		image: p7,
		about: "Basketball Shoe",
	},
	{
		id: 8,
		name: "LeBron 19",
		price: 17595,
		category: "basketball",
		size: [6, 6.5],
		image: p8,
		about: "Basketball Shoes",
	},
	{
		id: 9,
		name: "Jordan Zoom Separate PF",
		price: 9295,
		category: "basketball",
		size: [7, 7.5],
		image: p9,
		about: "Basketball Shoes",
	},
	{
		id: 10,
		name: "LeBron 19",
		price: 18695,
		category: "basketball",
		size: [5, 6.5],
		image: p10,
		about: "Basketball shoes",
	},
	{
		id: 11,
		name: "Nike Phantom GT2 Elite FG",
		price: 21995,
		category: "football",
		size: [6, 6.5, 7],
		image: p11,
		about: "Firm-Ground Football Boot",
	},
	{
		id: 12,
		name: "Nike Mercurial Vapor 14 Academy TF",
		price: 7495,
		category: "football",
		size: [7, 5, 5.5],
		image: p12,
		about: "Turf Football Shoes",
	},
	{
		id: 13,
		name: "Nike Phantom GT2 Academy Dynamic Fit MG",
		price: 8495,
		category: "football",
		size: [5, 6, 7],
		image: p13,
		about: "Multi-Ground Football Boot",
	},
	{
		id: 14,
		name: "Nike Mercurial Dream Speed Superfly 8 Club MG",
		price: 6495,
		category: "football",
		size: [6, 7.5, 6.5],
		image: p14,
		about: "Multi-Ground Football Boots",
	},
	{
		id: 15,
		name: "Nike Mercurial Dream Speed Superfly 8 Academy TF",
		price: 8995,
		category: "football",
		size: [7, 5],
		image: p15,
		about: "Turf Football Shoes",
	},
	{
		id: 16,
		name: "Nike Defy All Day",
		price: 4995,
		category: "traning_and_gym",
		size: [5, 6, 7, 5.5, 6.5, 7.5],
		image: p16,
		about: "Men's Training Shoe",
	},
	{
		id: 17,
		name: "Nike Air Zoom SuperRep 3",
		price: 10295,
		category: "traning_and_gym",
		size: [5.5, 6.5, 7.5],
		image: p17,
		about: "Men's HIIT Class Shoes",
	},
	{
		id: 18,
		name: "Nike Metcon 7",
		price: 11495,
		category: "traning_and_gym",
		size: [7],
		image: p18,
		about: "Tranning Shoes",
	},
	{
		id: 19,
		name: "Nike Metcon 7 AMP",
		price: 12995,
		category: "traning_and_gym",
		size: [5],
		image: p19,
		about: "Tranning Shoes",
	},
	{
		id: 20,
		name: "Nike Savaleos",
		price: 10295,
		category: "traning_and_gym",
		size: [6],
		image: p20,
		about: "Weightlifting Shoe",
	},
];

const Products = (props) => {
	const [category, setCategory] = useState([]);
	const [size, setSize] = useState([]);
	const [max, setMax] = useState(23000);
	const [min, setMin] = useState(6000);
	let FilteredList = [];

	const changeCategory = (value) => {
		// if value is already present in the list remove it otherwise add it
		if (category.includes(value)) {
			// means we need to remove it

			setCategory((prevValue) => {
				prevValue.splice(prevValue.indexOf(value), 1);

				return [...prevValue];
			});
		} else {
			// here we neeed to add it
			setCategory((prevValue) => {
				prevValue.push(value);
				return [...prevValue];
			});
		}
	};

	const changeSize = (value) => {
		value = parseInt(value);
		if (size.includes(value)) {
			setSize((prevValue) => {
				prevValue.splice(prevValue.indexOf(value), 1);

				return [...prevValue];
			});
		} else {
			setSize((prevValue) => {
				prevValue.push(value);
				return [...prevValue];
			});
		}
	};

	const changePriceRange = (max, min) => {
		setMin(min);
		setMax(max);
	};

	const addRange = (list) => {
		list = list.filter((item) => {
			if (item.price >= min && item.price <= max) return true;
			else return false;
		});
		return list;
	};

	const addCategory = (list) => {
		if (category.length === 0) {
			return list;
		}

		list = list.filter((item) => {
			if (category.includes(item.category)) return true;
			else return false;
		});
		console.log(list);
		return list;
	};

	const addSize = (list) => {
		if (size.length === 0) {
			console.log("returning the original list");
			return list;
		} else {
			list = list.filter((item) => {
				for (let i = 0; i < item.size.length; i++) {
					console.log("size: ", size);
					console.log("item value: ", item.size[i]);
					if (size.includes(item.size[i])) {
						console.log("size list : ", size);
						console.log("item value : ", item.size[i]);
						return true;
					}
				}
				return false;
			});
			console.log("returning list : ", list);
			return list;
		}
	};

	FilteredList = addRange(addSize(addCategory(ProductList)));

	return (
		<div className='filter-and-product-container'>
			<div className='filter-container'>
				<Filters
					changeCategory={changeCategory}
					changePriceRange={changePriceRange}
					changeSize={changeSize}
				/>
			</div>
			<div className='products-container'>
				{FilteredList.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</div>
	);
};

export default Products;
