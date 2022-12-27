import React, { useState, useEffect } from "react";
import AreaCards from "../tour_list/AreaCards";
import { save } from "../../redux/modules/area";
// import { useDispatch } from "react-redux";

// 관광정보
const key =
	"ooVIIXvB%2F%2F%2B6kPC1iOe5%2FArkuU5iefGXK4vuV228x6faKt32nsB1O%2BZCEVg8v3xcT6m9tvBLsprDfDjVs5gt3w%3D%3D";
const areaCd = 1; //서울시
const sggCd = 3; //구로구
const contentTypeId = 15;
const url = `https://apis.data.go.kr/B551011/KorService/areaBasedList?_type=json&serviceKey=${key}&pageNo=1&numOfRows=20&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=${contentTypeId}&areaCode=${areaCd}
`;

// &sigunguCode=${sggCd}
export default function TourArea() {
	const [query, setQuery] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log(json.response.body.items.item);
				setData(json.response.body.items.item);
			});
	}, []);

	return (
		<section className="tourArea">
			<h1>
				<span>#</span> 관광지
			</h1>

			<div className="tabMenu">
				<ul className="tabMenu">
					<li onClick={() => setQuery("")}>전체</li>
					<li onClick={() => setQuery("종로")}>종로구</li>
					<li onClick={() => setQuery("강남")}>강남구</li>
					<li onClick={() => setQuery("중구")}>중구</li>
					<li onClick={() => setQuery("관악")}>관악구</li>
					<li onClick={() => setQuery("서초")}>서초구</li>
				</ul>
			</div>
			<div className="contents">
				{data
					.filter((data) => data.addr1.toLowerCase().includes(query))
					.map((area) => (
						<AreaCards area={area} key={area.contentid} />
					))}
			</div>
		</section>
	);
}
