import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { save } from "../../redux/modules/area";

const AreaCards = ({ area, onSave, isSaved }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="areaCard"
			onClick={() => {
				dispatch(save(area));
			}}>
			<Link to={`${area.contentid}`}>
				<div className="image">
					<img
						src={
							area.firstimage === ""
								? "/images/profile.jpeg"
								: area.firstimage
						}
						alt="관광이미지"
					/>
				</div>
			</Link>
			<div className="text">
				<h2 className="title">{area.title}</h2>
				<button onClick={onSave}>{isSaved ? "삭제" : "저장"}</button>
				<p className="address">{area.addr1}</p>
			</div>
		</div>
	);
};

export default AreaCards;
