import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
	ul {
		display: flex;
		justify-content: center;
		align-items: center;

		li {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 180px;
			height: 40px;
			background-color: #c79aff;
			opacity: 0.7;
			margin: 0 10px;
			cursor: pointer;
			&:hover {
				opacity: 1;
			}

			a {
				font-size: 20px;
				color: white;
			}
		}
	}
`;

export default function NavBtn() {
	let { location } = useLocation();
	console.log(window.location.pathname);
	return (
		<>
			<Nav>
				<ul>
					{window.location.path === "/tour" ? (
						<li style={{ background: "#111" }}>
							<Link to="/tour">관광지</Link>
						</li>
					) : (
						<li>
							<Link to="/tour">관광지</Link>
						</li>
					)}
					<li>
						<Link to="/tour">관광지</Link>
					</li>
					<li>
						<Link to="/culture">문화시설</Link>
					</li>
					<li>
						<Link to="/food">식당</Link>
					</li>
				</ul>
			</Nav>
		</>
	);
}
