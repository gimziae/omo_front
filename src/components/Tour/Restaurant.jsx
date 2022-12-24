import React from "react";
import AreaCards from "../Tour_list/AreaCards";

const Restaurant = () => {
	const data = [
		{
			id: 1,
			img: "/images/INSADONG.jpg",
			text: "인사동",
		},
		{
			id: 2,
			img: "/images/MyeongDONG.jpg",
			text: "명동",
		},
	];

	return (
		<>
			<div className="restaurant">
				<div>
					<h1>
						<span>#</span> 맛집
					</h1>
				</div>
				<div className="bottom">
					{data.map((area) => (
						<AreaCards area={area} key={area.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Restaurant;
