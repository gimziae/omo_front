import React, { useState } from "react";
import Calender from "../../pages/Board/Calendar";
import Diary from "../../pages/Board/Diary";

const menuList = [
	{
		id: 0,
		name: "일정",
		componentName: "calendar",
		component: <Calender />,
	},
	{
		id: 1,
		name: "다이어리",
		componentName: "diary",
		component: <Diary />,
	},
];

export default function Menu() {
	const [index, setIndex] = useState(0);
	return (
		<>
			<hr />
			<div className="side">
				<div className="inner">
					<span>MENU</span>
					<br />
					<ul className="menu">
						{menuList.map((item, index) => (
							<li
								key={index}
								className={item.componentName}
								onClick={() => setIndex(item.id)}>
								{item.name}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
