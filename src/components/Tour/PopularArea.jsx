import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

// 관광정보
const key =
	"ooVIIXvB%2F%2F%2B6kPC1iOe5%2FArkuU5iefGXK4vuV228x6faKt32nsB1O%2BZCEVg8v3xcT6m9tvBLsprDfDjVs5gt3w%3D%3D";
const areaCd = 1; //서울시
const sggCd = 7; //구로구
const url = `https://apis.data.go.kr/B551011/KorService/areaBasedList?_type=json&serviceKey=${key}&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=39&areaCode=${areaCd}&sigunguCode=${sggCd}
`;

// import { data } from "../db/data";

export default function PopularArea() {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				console.log(json.response.body.items.item);
				setData(json.response.body.items.item);
				console.log(setData);
			});
	}, []);

	return (
		<section className="popularArea">
			<h1 className="todayPlace">
				OMO가 추천하는 <span># 서울 관광지</span>
			</h1>
			<div className="sliderWrap">
				<Slider {...settings}>
					{data.map((data, index) => (
						<div className="card" key={index}>
							<div className="card-top">
								<img
									src={
										data.firstimage === ""
											? "/images/profile.jpeg"
											: data.firstimage
									}
									alt={data.title}
								/>
							</div>
							<div className="card-bottom">
								<h2>{data.title}</h2>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
