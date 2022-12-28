import React from "react";

import Header from "../components/Header";
import Profile from "../components/board/Profile";
import Calendar from "./board/Calendar";
import SaveList from "./board/SaveList";
import { useState } from "react";
import styled from "styled-components";

const menuList = [
	{
		id: 0,
		name: "일정",
		componentName: "show calendarView",
		component: <Calendar />,
	},
	{
		id: 1,
		name: "저장목록",
		componentName: "show saveList",
		component: <SaveList />,
	},
];

export default function UserBoard() {
	const [index, setIndex] = useState(0);

	return (
		<>
			<Header />
			<section id="board">
				<div className="wrap">
					<div className="left">
						<Profile />
						<hr />
						<div className="menu">
							{" "}
							<h3>MENU</h3>
							<ul className="nav">
								{menuList.map((item) => (
									<li
										key={item.id}
										className={item.componentName}
										onClick={() => {
											setIndex(item.id);
										}}>
										{item.name}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="right">
						{menuList
							.filter((item) => index === item.id)
							.map((item) => (
								<div
									className={item.componentName}
									key={item.id}>
									{item.component}
								</div>
							))}
					</div>
				</div>
			</section>
		</>
	);
}
