import React from "react";
import "./AreaCards.scss";

const AreaCards = ({ area }) => {
  return (
    <div className="areacard">
      <div className="image">
        <img src={area.img} alt="관광이미지" />
      </div>
      <span className="areatext">{area.text}</span>
      <span className="areatext2">서울시 강남구 oo동 oo번지</span>
    </div>
  );
};

export default AreaCards;
