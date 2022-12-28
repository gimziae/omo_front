import React from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`
	width: 300px;
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ProfileImg = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 15px;
`;
const Img = styled.img`
	width: 100%;
	height: 100%;
`;
const UserName = styled.h2`
	font-size: 18px;
	letter-spacing: 1px;
	color: #999;
	strong {
		color: yellowgreen;
		font-size: 24px;
	}
`;

export default function Profile() {
	return (
		<>
			<ProfileDiv>
				<ProfileImg>
					<Img
						src="//source.unsplash.com/500x503/?disney"
						alt="기본 프로필"
					/>
				</ProfileImg>

				<UserName>
					<strong>{localStorage.getItem("name")}</strong>'s PAGE
				</UserName>
			</ProfileDiv>
		</>
	);
}
