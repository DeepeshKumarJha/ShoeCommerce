import React from "react";
import Category from "./Category";
import Range from "./Range";
import Size from "./Size";

const Filters = (props) => {
	return (
		<>
			<Category changeCategory={props.changeCategory} />
			<Range changePriceRange={props.changePriceRange} />
			<Size changeSize={props.changeSize} />
		</>
	);
};

export default Filters;
