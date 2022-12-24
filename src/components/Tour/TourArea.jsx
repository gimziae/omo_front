import React from "react";
import AreaCards from "../tour_list/AreaCards";

const TourArea = () => {
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
		<div className="tourarea">
			<div>
				<h1>
					<span>#</span> 관광지
				</h1>
			</div>
			<div className="bottom">
				{data.map((area) => (
					<AreaCards area={area} key={area.id} />
				))}
			</div>
		</div>
	);
};

export default TourArea;
