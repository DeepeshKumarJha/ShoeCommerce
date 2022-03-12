import React, { useState } from "react";
import "./Styles/Size.css";

const Size = (props) => {
	const [sizeDrop, setSizeDrop] = useState(false);

	const changeSizeDrop = () => {
		const size = document.querySelector(".size-drop-down");
		size.classList.toggle("show-size-drop");

		setSizeDrop((prevVal) => !prevVal);
	};

	const onSizeChange = (event) => {
		props.changeSize(event.target.value);
	};

	return (
		<div className='size-container'>
			<div className='size-heading'>
				<span>Size</span>
				<span className='size-btn' onClick={changeSizeDrop}>
					{sizeDrop ? "hide" : "show"}
				</span>
			</div>
			<div className='size-drop-down'>
				<div>
					<input
						type='checkbox'
						id='five'
						value='5'
						onChange={onSizeChange}
					/>
					<label htmlFor='five'>5</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='five-point-five'
						value='5.5'
						onChange={onSizeChange}
					/>
					<label htmlFor='five-point-five'>5.5</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='six'
						value='6'
						onChange={onSizeChange}
					/>
					<label htmlFor='six'>6</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='six-point-six'
						value='6.5'
						onChange={onSizeChange}
					/>
					<label htmlFor='six-point-six'>6.5</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='seven'
						value='7'
						onChange={onSizeChange}
					/>
					<label htmlFor='seven'>7</label>
				</div>
				<div>
					<input
						type='checkbox'
						id='seven-point-seven'
						value='7.5'
						onChange={onSizeChange}
					/>
					<label htmlFor='seven-point-seven'>7.5</label>
				</div>
			</div>
		</div>
	);
};

export default Size;
