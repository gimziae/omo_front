import React from "react";

import { BsFillBookmarkFill, BsFillHeartFill } from "react-icons/bs";
import Header from "../Header";

export default function RestaurantPage() {
	return (
		<>
			<Header />
			<div>
				<h1>장소</h1>
				<BsFillBookmarkFill />
			</div>

			<br />
			<div className="introduce">
				<div className="left">
					<img src alt="api 지도" />
				</div>
				<div className="right">
					<h2>설명</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						At vel consequuntur ad laudantium nisi quo nostrum
						aliquam? Minima tenetur, distinctio ratione,
						accusantium, molestiae earum obcaecati pariatur beatae
						aliquid quasi corrupti.
					</p>
					<div className="icons">
						<div className="item">
							<BsFillHeartFill />
							공유
						</div>
						<div className="item">
							<BsFillBookmarkFill />
							저장
						</div>
					</div>
				</div>
			</div>
			<div className="similar_place"></div>
		</>
	);
}
