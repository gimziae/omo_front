import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<>
			<header id="header">
				<div className="wrap">
					<NavLink to="/" className="logo">
						<img src="/images/omo-logo.png" alt="로고" />
					</NavLink>

					<NavLink to="/login" className="login">
						<FaUser />
					</NavLink>
				</div>
			</header>
		</>
	);
}
