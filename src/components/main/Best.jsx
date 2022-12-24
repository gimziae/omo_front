import React from "react";
import { NavLink } from "react-router-dom";

export default function Best() {
	return (
		<section id="best">
			<h2>가볼만한 곳</h2>
			<NavLink to="/tour">더보기</NavLink>
		</section>
	);
}
