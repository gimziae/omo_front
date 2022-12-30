import React from "react";
import { useSelector } from "react-redux";

import Footer from "../components/Footer";

import Header from "../components/Header";
import Best from "../components/main/Best";
import Intro from "../components/main/Intro";

import Plan from "../components/main/Plan";

export default function Main() {
	const isLogin = useSelector((state) => state.user.isLogin);

	return (
		<>
			<Header />
			<main>
				<div className="mainWrap">
					{/* plan 로그인 시에만 보이게 */}
					{!isLogin ? <Intro /> : <Plan />}

					<Best />
				</div>
			</main>
			<Footer />
		</>
	);
}
