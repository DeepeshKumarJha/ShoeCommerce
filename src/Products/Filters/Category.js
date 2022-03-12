import React, { useState } from "react";
import "./Styles/Category.css";

const Category = (props) => {
	const [drop, setDrop] = useState(false);

	const changeDrop = () => {
		const ctg = document.querySelector(".category-drop-down");
		ctg.classList.toggle("show-the-drop");

		setDrop((prevVal) => !prevVal);
	};

	const handleCheckBox = (event) => {
		props.changeCategory(event.target.value);
	};

	return (
		<div className='category-conatiner'>
			<div className='category-heading'>
				<span>Category</span>
				<span className='category-btn' onClick={changeDrop}>
					{drop ? "hide" : "show"}
				</span>
			</div>

			<ul className='category-drop-down'>
				<li>
					<input
						type='checkbox'
						id='first'
						value='running'
						onChange={handleCheckBox}
					/>
					<label htmlFor='first'> Running</label>
				</li>
				<li>
					<input
						type='checkbox'
						id='second'
						value='basketball'
						onChange={handleCheckBox}
					/>
					<label htmlFor='second'> Basketball</label>
				</li>
				<li>
					<input
						type='checkbox'
						id='third'
						value='football'
						onChange={handleCheckBox}
					/>
					<label htmlFor='third'> Football</label>
				</li>
				<li>
					<input
						type='checkbox'
						id='fourth'
						value='traning_and_gym'
						onChange={handleCheckBox}
					/>
					<label htmlFor='fourth'> Traning and Gym</label>
				</li>
			</ul>
		</div>
	);
};

export default Category;
