import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Best from "../components/main/Best";

import Plan from "../components/main/Plan";
import Popular from "../components/main/Popular";

export default function Main() {
	const isLogin = useSelector((state) => state.user.isLogin);

	return (
		<>
			<Header />
			<main>
				<div className="mainWrap">
					{/* plan 로그인 시에만 보이게 */}
					{!isLogin ? null : <Plan />}
					<Popular />
					<Best />
				</div>
			</main>
			;
		</>
	);
}
