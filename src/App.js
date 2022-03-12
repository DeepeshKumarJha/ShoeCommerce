import React, { Component } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Products from "./Products/Products";

export default class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Products />
				<Footer />
			</>
		);
	}
}
