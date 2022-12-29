import React from "react";
import Header from "../../components/Header";
import TourArea from "../../components/place/tour/TourArea";
import NavBtn from "../../components/place/NavBtn";
import TourPopularArea from "../../components/place/tour/TourPopularArea";
import Footer from "../../components/Footer";

export default function Tour() {
	return (
		<>
			<Header />

			<div className="contentsWrap">
				<NavBtn />
				<TourPopularArea />
				<TourArea />
			</div>
			<Footer />
		</>
	);
}
