import React, { useState } from "react";
import "./Styles/Range.css";

const Range = (props) => {
	const [rangeDrop, setRangeDrop] = useState(false);
	const [minVal, setMinVal] = useState(6000);
	const [maxVal, setMaxVal] = useState(23000);

	const changeRangeDrop = () => {
		const rng = document.querySelector(".range-drop-down");
		rng.classList.toggle("show-range-drop");

		setRangeDrop((prevVal) => !prevVal);
	};

	const handleRangeChange = (event) => {
		const rangeInput = document.querySelectorAll(".range-input input");
		const progress = document.querySelector(".slider .progress");
		setMinVal(parseInt(rangeInput[0].value));
		setMaxVal(parseInt(rangeInput[1].value));

		if (maxVal - minVal < 100) {
			if (event.target.className === "range-min") {
				setMinVal(maxVal - 100);
				rangeInput[0].value = maxVal - 50;
			} else {
				setMaxVal(minVal + 100);
				rangeInput[1].value = minVal + 50;
			}
		} else {
			let range = 23000 - 6000;
			progress.style.left = ((minVal - 6000) / range) * 100 + "%";
			progress.style.right = ((23000 - maxVal) / range) * 100 + "%";
			props.changePriceRange(maxVal, minVal);
		}
	};

	return (
		<div className='range-container'>
			<div className='range-heading'>
				<span>Price</span>
				<span className='range-btn' onClick={changeRangeDrop}>
					{rangeDrop ? "hide" : "show"}
				</span>
			</div>
			<div className='range-drop-down'>
				<div className='range-text'>
					<p>
						₹{minVal} - ₹{maxVal}
					</p>
				</div>
				<div className='slider'>
					<div className='progress'></div>
				</div>
				<div className='range-input'>
					<input
						className='range-min'
						type='range'
						value={minVal}
						min={6000}
						max={23000}
						id='range-slider-one'
						onChange={handleRangeChange}
					/>
					<input
						className='range-max'
						type='range'
						value={maxVal}
						min={6000}
						max={23000}
						id='range-slider-two'
						onChange={handleRangeChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default Range;
