import React from "react";
import Header from "../components/Header";
import PopularArea from "../components/tour/PopularArea";
import TourArea from "../components/tour/TourArea";

export default function Tour() {
	return (
		<>
			<Header />
			<div className="contentsWrap">
				<PopularArea />
				<TourArea />
			</div>
		</>
	);
}
