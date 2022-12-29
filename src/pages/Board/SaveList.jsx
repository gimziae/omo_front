import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsTrash, BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardSectionDiv = styled.div`
	width: 100%;

	.row {
		width: 100%;
		display: flex;
		gap: 15px;
		.card {
			width: 200px;
		}
		.add {
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;

			a {
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				svg {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80%;
					height: 80%;
					color: #bbb;
				}
			}
		}
	}
`;
const savedListURL = "http://localhost:4000/board/places";

export default function SaveList() {
	const [savedList, setSavedList] = useState([]);
	// 저장목록 데이터 불러오기
	useEffect(() => {
		fetch(savedListURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("Token"),
			},
		})
			.then((res) => res.json())
			.then((json) => {
				if (json.message === "saved places") {
					setSavedList(json.savedPlaces);
				} else {
					alert("데이타 로드 실패");
				}
			});
	}, []);

	return (
		<>
			<CardSectionDiv>
				<div className="row g-1">
					{" "}
					<div className="card col-3 add">
						<Link to="/tour">
							<BsPlusSquare />
						</Link>
						<h3>더 보기</h3>
					</div>
					{savedList.map((item, index) => {
						return (
							<div className="card col-3">
								<div className="card-body">
									<h5 className="card-title">
										{item.placeName}
									</h5>
									<p className="card-text">placeContent</p>
									<button>
										<BsTrash />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</CardSectionDiv>
		</>
	);
}
