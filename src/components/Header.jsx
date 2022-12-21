import React, { useState } from "react";
import LoginModal from "./LoginModal";

export default function Header() {
	return (
		<>
			<header>
				<div className="wrap">
					<img
						src="/images/omo-logo.png"
						alt="로고"
						className="logo"
					/>
					<LoginModal />
				</div>
			</header>
		</>
	);
}
