import React from "react";

import { HiShare, HiOutlineBookmark } from "react-icons/hi";
import Header from "../Header";

export default function RestaurantPage() {
	return (
		<>
			<Header />
			{/* <div>
				<h1>장소</h1>
				<BsFillBookmarkFill />
			</div> */}

			<br />
			<div className="introduce">
				<div className="left"></div>
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
							<HiShare /> 공유
						</div>
						<div className="item">
							<HiOutlineBookmark />
							저장
						</div>
					</div>
				</div>
			</div>
			<div className="similar_place"></div>
		</>
	);
}
