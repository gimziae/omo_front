import React from "react";
import Header from "../components/Header";
import PopularArea from "../components/Tour/PopularArea";
import Restaurant from "../components/Tour/Restaurant";
import TourArea from "../components/Tour/TourArea";

export default function Tour() {
	return (
		<>
			<Header />
			<PopularArea />
			<TourArea />
			<Restaurant />
		</>
	);
}
