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
				<ul>
					{/* 저장된 일정 불러오기 */}
					{savedList.length !== 0 ? (
						savedList.map((item, index) => {
							console.log(savedList);
							return (
								<>
									<li key={index}>
										<span className="data">
											{item.date.split("-")[0]}.{" "}
											{item.date.split("-")[1]}.{" "}
											{item.date.substr(8, 2)}
										</span>
										<span className="title">
											<strong>{item.title}</strong> -{" "}
											{item.content}
										</span>
									</li>
								</>
							);
						})
					) : (
						<li>생성된 일정이 없습니다!</li>
					)}
				</ul>

				<NavLink to="/board">
					<span>내 일정을 더 보시려면</span>
					<MdReadMore />
				</NavLink>
			</div>
		</section>
	);
}
