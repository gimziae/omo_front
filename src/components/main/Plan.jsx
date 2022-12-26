import React from "react";
import { NavLink } from "react-router-dom";

export default function Plan() {
	return (
		<section id="plan">
			<h2>내 일정</h2>
			<NavLink to="/board">더보기</NavLink>
		</section>
	);
}
