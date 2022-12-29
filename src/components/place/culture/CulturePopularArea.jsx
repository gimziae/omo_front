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
const contentTypeId = 14;
const url = `https://apis.data.go.kr/B551011/KorService/areaBasedList?_type=json&serviceKey=${key}&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=${contentTypeId}&areaCode=${areaCd}&sigunguCode=${sggCd}
`;

export default function CulturePopularArea() {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		pauseOnHover: true,
		speed: 2500,
		arrow: true,
		draggable: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		// prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
		// nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768,
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
				// console.log(json.response.body.items.item);
				setData(json.response.body.items.item);
			});
	}, []);

	return (
		<section className="popularArea">
			<h1 className="todayPlace">
				OMO가 추천하는 <span># 서울 문화공간</span>
			</h1>
			<div className="sliderWrap">
				<Slider {...settings}>
					{data.map((data, index) => (
						<div className="content" key={index}>
							<div className="conImg">
								<img
									src={
										data.firstimage === ""
											? "/images/profile.jpeg"
											: data.firstimage
									}
									alt={data.title}
								/>
								{/* <Card area={data} key={data.contentid} /> */}
							</div>
							<div className="conText">
								<h3>{data.title}</h3>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
