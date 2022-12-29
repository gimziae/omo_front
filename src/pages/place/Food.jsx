import React from "react";
import Header from "../../components/Header";
import FoodPopularArea from "../../components/place/food/FoodPopularArea";
import FoodArea from "../../components/place/food/FoodArea";
import NavBtn from "../../components/place/NavBtn";
import Footer from "../../components/Footer";
export default function CultureMain() {
	return (
		<>
			<Header />
			<div className="contentsWrap">
				<NavBtn />
				<FoodPopularArea />
				<FoodArea />
				<Footer />
			</div>
		</>
	);
}
