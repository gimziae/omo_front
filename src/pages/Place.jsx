import React, { useState } from "react";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import CultureArea from "../components/place/culture/CultureArea";
import CulturePopularArea from "../components/place/culture/CulturePopularArea";
import FoodArea from "../components/place/food/FoodArea";

import TourArea from "../components/place/tour/TourArea";
import TourPopularArea from "../components/place/tour/TourPopularArea";
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
			margin: 0 10px;
			cursor: pointer;
			&:hover {
				opacity: 1;
			}

			span {
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

export default function Place() {
	const [index, setIndex] = useState(0);
	const placeCategory = [
		{
			id: 0,
			name: "관광지",
			componentName: "show tour",
			component: <TourArea />,
		},
		{
			id: 1,
			name: "문화생활",
			componentName: "show culture",
			component: <CultureArea />,
		},
		{
			id: 2,
			name: "음식점",
			componentName: "show food",
			component: <FoodArea />,
		},
	];
	return (
		<>
			<Header />
			<CulturePopularArea />

			<Nav>
				<ul className="nav">
					{placeCategory.map((item) => (
						<li
							key={item.id}
							className={item.componentName}
							onClick={() => {
								setIndex(item.id);
							}}>
							<span>{item.name}</span>
						</li>
					))}
				</ul>
			</Nav>

			<div className="area">
				{placeCategory
					.filter((item) => index === item.id)
					.map((item) => (
						<div className={item.componentName} key={item.id}>
							{item.component}
						</div>
					))}
			</div>
			<Footer />
		</>
	);
}
