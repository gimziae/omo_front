import React, { useState, useEffect } from "react";
import AreaCards from "../tour_list/AreaCards";
import "../../scss/components/tour/_tourArea.scss";

import { data } from "../db/data";

export default function TourArea() {
	const [query, setQuery] = useState("");

	return (
		<div className="tourarea">
			<div>
				<h1>
					<span>#</span> 관광지
				</h1>
			</div>
			<div className="searchbar">
				<input
					type="text"
					placeholder="검색"
					className="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<div className="bottom">
				{data
					.filter((data) => data.text.toLowerCase().includes(query))
					.map((area) => (
						<AreaCards area={area} key={area.id} />
					))}
			</div>
		</div>
	);
}
