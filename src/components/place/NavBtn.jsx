import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
	margin-top: 1.5em;
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
			margin: 0 10px;
			cursor: pointer;
			&:hover {
				opacity: 1;
			}

			a {
				width: 100%;
				height: 100%;
				background-color: #c79aff;
				opacity: 0.5;

				font-size: 20px;
				text-align: center;
				line-height: 40px;
				color: white;
				&.active {
					opacity: 1;
				}
			}
		}
	}
`;

export default function NavBtn() {
	return (
		<>
			<Nav>
				<ul>
					<li>
						<NavLink to="/tour" activeClassName="active">
							관광지
						</NavLink>
					</li>
					<li>
						<NavLink to="/culture">문화시설</NavLink>
					</li>
					<li>
						<NavLink to="/food">식당</NavLink>
					</li>
				</ul>
			</Nav>
		</>
	);
}
