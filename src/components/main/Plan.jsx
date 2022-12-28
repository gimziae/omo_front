import React from "react";
import { NavLink } from "react-router-dom";
import { MdReadMore } from "react-icons/md";

export default function Plan() {
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
					<li>2023. n. n 장소장소장소</li>
					<li>2023. n. n 장소장소장소</li>
					<li>2023. n. n 장소장소장소</li>
					<li>2023. n. n 장소장소장소</li>
				</ul>

				<NavLink to="/board">
					<span>내 일정을 더 보시려면</span>
					<MdReadMore />
				</NavLink>
			</div>
		</section>
	);
}
