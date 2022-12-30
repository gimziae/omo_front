import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { save } from "../../redux/modules/area";

export default function Card({ area, onSave, isSaved }) {
	const dispatch = useDispatch();

	return (
		<div
			className="card"
			onClick={() => {
				dispatch(save(area));
			}}>
			<Link
				to={`${area.contentid}`}
				state={{ img: `${area.firstimage}`, addr: `${area.addr1}` }}>
				<div className="image">
					<img
						src={
							area.firstimage === ""
								? "/images/noimg.png"
								: area.firstimage
						}
						alt="관광이미지"
					/>
				</div>
			</Link>
			<div className="text">
				<h2 className="title">{area.title}</h2>
				<p className="address">{area.addr1}</p>
			</div>
		</div>
	);
}
