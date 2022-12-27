import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { save } from "../../redux/modules/area";

const CultureCards = ({ area }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="areaCard"
      onClick={() => {
        dispatch(save(area));
      }}
    >
      <Link to={`${area.contentid}`}>
        <div className="image">
          <img src={area.firstimage === "" ? "/images/profile.jpeg" : area.firstimage} alt="관광이미지" />
        </div>
        <div className="text">
          <h2 className="title">{area.title}</h2>
          <p className="address">{area.addr1}</p>
        </div>
      </Link>
    </div>
  );
};

export default CultureCards;
