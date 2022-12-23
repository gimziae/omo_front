import React from "react";
import Header from "../components/Header";
import Best from "../components/main/Best";
import Intro from "../components/main/Intro";
import Plan from "../components/main/Plan";
import Popular from "../components/main/Popular";

export default function Main() {
	return (
		<>
			<Header />
			<main>
				<div className="mainWrap">
					<Intro />
					{/* plan 로그인 시에만 보이게 */}
					<Plan />
					<Popular />
					<Best />
				</div>
			</main>
		</>
	);
}
