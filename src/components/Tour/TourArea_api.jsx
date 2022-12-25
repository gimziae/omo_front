import React from "react";
import { useEffect } from "react";
import AreaCards from "../tour_list/AreaCards";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const key = "ooVIIXvB%2F%2F%2B6kPC1iOe5%2FArkuU5iefGXK4vuV228x6faKt32nsB1O%2BZCEVg8v3xcT6m9tvBLsprDfDjVs5gt3w%3D%3D";
const areaCd = 1; //서울시
const sggCd = 7; //구로구
const url = `https://apis.data.go.kr/B551011/KorService/areaBasedList?_type=json&serviceKey=${key}&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&contentTypeId=39&areaCode=${areaCd}&sigunguCode=${sggCd}
`;
export default function TourArea() {
  // const data = [
  //  {
  //      id: 1,
  //      img: "/images/INSADONG.jpg",
  //      text: "인사동",
  //  },
  //  {
  //      id: 2,
  //      img: "/images/MyeongDONG.jpg",
  //      text: "명동",
  //  },
  // ];
  const [data, setData] = useState([]);
  const test = document.querySelector(".bottom");
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
    <div className="tourarea">
      <div>
        <h1>
          <span>#</span> 관광지
        </h1>
      </div>
      <div className="bottom">
        {console.log("받아온 데이타", data)}
        {data.map((item, index) => {
          return (
            <Link to={`${index}`} key={index}>
              <li key={index}>{item.addr1}</li>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
