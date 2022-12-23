import React from "react";

import Header from "../../components/Header";
import Profile from "../../components/board/Profile";
import Menu from "../../components/board/Menu";

export default function Board() {
	return (
		<>
			<Header />
			<Profile />
			<br />
			<Menu />
		</>
	);
}
