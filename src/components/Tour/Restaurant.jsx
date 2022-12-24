import React from "react";
import AreaCards from "../Tour_list/AreaCards";
import "./Restaurant.scss";

const Restaurant = () => {
  const data = [
    {
      id: 1,
      img: "/img/INSADONG.jpg",
      text: "인사동",
    },
    {
      id: 2,
      img: "/img/MyeongDONG.jpg",
      text: "명동",
    },
  ];

  return (
    <div className="Restaurant">
      <div>
        <h1>
          <span>#</span> 맛집
        </h1>
      </div>
      <div className="bottom">
        {data.map((area) => (
          <AreaCards area={area} key={area.id} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
