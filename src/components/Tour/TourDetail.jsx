import React from "react";
import "./TourDetail.scss";
import { BsFillBookmarkFill, BsFillHeartFill } from "react-icons/bs";

import { data } from "../db/data";
import { useParams } from "react-router-dom";

export default function TourDetail() {
  // 주소값 받기
  let { areaID } = useParams();
  areaID = parseInt(areaID);
  const areaData = data.filter((el) => {
    return el.id === areaID;
  });

  return (
    <>
      <div>
        <h1>{areaData[0].text}</h1>
      </div>
      <br />
      <div className="introduce">
        <div className="left">
          {/* {클릭했을 때 해당 이미지 띄우기} */}
          <img src={areaData[0].img} alt="지도" />
        </div>
        <div className="right">
          {/* 설명 넣기 */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel consequuntur ad laudantium nisi quo nostrum
            aliquam? Minima tenetur, distinctio ratione, accusantium, molestiae earum obcaecati pariatur beatae aliquid
            quasi corrupti.
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
