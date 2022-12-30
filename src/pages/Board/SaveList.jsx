import React, { useEffect, useState } from "react";

import { BiBookmarkPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const savedListURL = "http://localhost:4000/board/places";

export default function SaveList() {
	const [savedList, setSavedList] = useState([]);

	// 저장목록 데이터 불러오기
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
				if (json.message === "saved places") {
					setSavedList(json.savedPlaces);
				} else {
					alert("데이터 로드 실패");
				}
			});
	}, []);

	return (
		<>
			<section className="saveList">
				<div className="row">
					<div className="add col-2">
						<Link to="/tour">
							<BiBookmarkPlus />
							<h3>더 보러가기</h3>
						</Link>
					</div>
					{savedList.map((item, index) => {
						return (
							<div className="savedPlace col-3" key={index}>
								<div className="img">
									{item.imageUrl ? (
										<img
											src={item.imageUrl}
											alt={item.placeName}
										/>
									) : (
										<img
											src="/images/noimg.png"
											alt="이미지 미제공"
										/>
									)}
								</div>

								<h5 className="card-title">{item.placeName}</h5>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
