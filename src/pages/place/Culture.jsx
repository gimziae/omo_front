import React from "react";
import Header from "../../components/Header";
import CulturePopularArea from "../../components/place/culture/CulturePopularArea";
import CultureArea from "../../components/place/culture/CultureArea";
import NavBtn from "../../components/place/NavBtn";

export default function CultureMain() {
	return (
		<>
			<Header />
			<div className="contentsWrap">
				<NavBtn />
				<CulturePopularArea />
				<CultureArea />
			</div>
		</>
	);
}
