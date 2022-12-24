import React from "react";
import PopularArea from "../Tour/PopularArea";
import TourArea from "../Tour/TourArea";
import Restaurant from "../Tour/Restaurant";
import Header from "../Header";

export default function TourMain() {
	return (
		<>
			<Header />
			<PopularArea />
			<TourArea />
			<Restaurant />
		</>
	);
}
