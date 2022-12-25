import React from "react";
import "./PopularArea.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "../db/data";

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

  return (
    <>
      <h1 className="todayplace">
        OMO가 추천하는 <span># 서울 관광지</span>
      </h1>
      <Slider {...settings}>
        {data.map((data) => (
          <div className="card">
            <div className="card-top">
              <img src={data.img} alt={data.text} />
            </div>
            <div className="card-bottom">
              <h2>{data.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
