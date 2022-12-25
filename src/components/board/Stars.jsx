import React, { useState } from "react";

import { ImStarFull } from "react-icons/im";

export default function Stars() {
	const [clicked, setClicked] = useState([false, false, false, false, false]);
	const array = [0, 1, 2, 3, 4];

	const handleStarClick = (index) => {
		let clickStates = [...clicked];
		for (let i = 0; i < 5; i++) {
			// clickStates[i] = i <= index ? true : false;
			clickStates[i] = i <= index ? true : false;
		}
		setClicked(clickStates);
	};

	let score = clicked.filter(Boolean).length;
	return (
		<>
			<div className="stars">
				{array.map((el) => (
					<ImStarFull
						key={el}
						onClick={() => handleStarClick(el)}
						className={clicked[el] && "yellow"}
						size="35"
					/>
				))}
			</div>
		</>
	);
}
