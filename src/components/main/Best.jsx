import React from "react";
import { NavLink } from "react-router-dom";

export default function Best() {
	return (
		<section id="best">
			<h3>오늘 이곳은 어때요?</h3>
			<div className="moreContainer">
				<div className="tourMore col-4">
					<NavLink to="/tour">
						<div className="img">
							<img src="/images/mainTour.jpeg" alt="관광지" />
						</div>
					</NavLink>
					<span>
						꼭 가봐야할 <br /> 핫플레이스
					</span>
				</div>
				<div className="cultureMore col-4">
					<NavLink to="/culture">
						<div className="img">
							<img src="images/mainCulture.jpeg" alt="문화시설" />
						</div>
					</NavLink>
					<span>
						일상을 특별하게
						<br /> 만들어줄 공간
					</span>
				</div>
				<div className="foodMore col-4">
					<NavLink to="/food">
						<div className="img">
							<img src="/images/mainFood.jpeg" alt="" />
						</div>
					</NavLink>
					<span>
						연말을 보내기 좋은 <br /> 다이닝 플레이스
					</span>
				</div>
			</div>
		</section>
	);
}
