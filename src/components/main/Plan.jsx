import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { MdReadMore } from "react-icons/md";

const savedListURL = "http://localhost:4000/board/schedules";

export default function Plan() {
	const [savedList, setSavedList] = useState([]);
	// 저장목록 불러오기
	useEffect(() => {
		fetch(savedListURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("Token"),
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.schedules) {
					setSavedList(json.schedules);
				} else {
					alert("데이터 로드 실패");
				}
			});
	}, []);
	console.log(savedList);
	return (
		<section id="plan">
			<div className="contents">
				<p>
					반갑습니다.🙌🏻
					<br />
					<strong>{localStorage.getItem("name")} </strong>
					님의 다가오는 일정 입니다.
				</p>
			</div>
			<div className="planList">
				{/* <p>일정 불러오기</p> */}
				<ul>
					{savedList.map((item, index) => {
						return (
							<li key={index}>
								<p>{item.title}</p>
								<p>{item.content}</p>

								<span>
									{item.createdAt.split("-")[0]}년{" "}
									{item.createdAt.split("-")[1]}월{" "}
									{item.createdAt.substr(8, 2)}일
								</span>
							</li>
						);
					})}
				</ul>

				<NavLink to="/board">
					<span>내 일정을 더 보시려면</span>
					<MdReadMore />
				</NavLink>
			</div>
		</section>
	);
}
