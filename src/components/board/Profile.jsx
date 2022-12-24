import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Profile() {
	return (
		<>
			<div className="profile">
				<div className="profile_img">
					<img src="/images/profile.jpeg" alt="기본 프로필" />
				</div>

				<h2 className="name">user name</h2>

				{/* <div className="borderline">
					<div className="profile_img">
						<img src="/images/profile.jpeg" alt="기본 프로필" />
					</div>
				</div>
				<div className="info">
					<h1 className="name">user name</h1>
					{/* <p>한줄 소개를 </p>
					<h5 className="hashtag">
						<span>#강동</span>
						<span>#강서</span>
						<span>#강남</span>
						<span>#강북</span>
					</h5>
					<a href="링크 주소 입력">INSTAGRAM</a> |{" "}
					<a href="링크 주소 입력">FACEBOOK</a> 
				</div> */}
			</div>
		</>
	);
}
