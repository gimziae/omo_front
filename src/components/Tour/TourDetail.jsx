import React from "react";
import { BsFillBookmarkFill, BsFillHeartFill } from "react-icons/bs";

import { useParams } from "react-router-dom";
import Header from "../Header";
import { useEffect, useState } from "react";

export default function TourDetail() {
	const [data, setData] = useState([]);
	const [image, setImage] = useState([]);
	let { contentid } = useParams();

	// 관광정보 API
	const key =
		"ooVIIXvB%2F%2F%2B6kPC1iOe5%2FArkuU5iefGXK4vuV228x6faKt32nsB1O%2BZCEVg8v3xcT6m9tvBLsprDfDjVs5gt3w%3D%3D";

	// 정보 불러오기
	const infoURL = `http://apis.data.go.kr/B551011/KorService/detailCommon?_type=json&serviceKey=${key}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&defaultYN=Y`;

	// 이미지 불러오기
	const imgURL = `http://apis.data.go.kr/B551011/KorService/detailImage?_type=json&serviceKey=${key}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&subImageYN=Y`;

	// 정보 불러오기
	useEffect(() => {
		fetch(infoURL)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log(json.response.body.items.item);
				setData(json.response.body.items.item);
			});
	}, []);

	// 이미지 불러오기
	useEffect(() => {
		fetch(imgURL)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log(json.response.body.items.item);
				setImage(json.response.body.items.item);
			});
	}, []);

	return (
		<>
			<Header />
			{/* 정보 불러오는 코드 */}
			{console.log(data)}
			{/* <h1>{data[0].homepage}</h1> */}
			{/* <h1>{data[0].title}</h1> */}
			{/* <p>{data[0].tel}</p> */}
			{console.log(image)}

			{/* 이미지 불러오는 코드 */}
			{image === undefined ? (
				<h1>제공되는 이미지 없음</h1>
			) : (
				image.map((item, index) => (
					<div key={index}>
						<img
							src={item.originimgurl}
							alt={item.contentid}
							style={{ width: 300 }}
						/>
					</div>
				))
			)}
		</>
	);
}
