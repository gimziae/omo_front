import React, { useState } from "react";
import styled from "styled-components";

import { FaUser } from "react-icons/fa";

const ModalBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(102, 100, 100, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalBox = styled.div`
	position: relative;
	width: 400px;
	z-index: 10;
	background: #f7f7f0;
	font-size: 30px;
	font-weight: 600;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ModalBtn = styled.button`
	/* position: absolute; */
	margin-bottom: 30px;
	border: none;
	background-color: white;
	font-size: 20px;
	cursor: pointer;
`;
export default function LoginModal() {
	const [isModal, setIsModal] = useState(false);
	const ModalHandler = () => {
		setIsModal((prev) => !prev);
	};
	return (
		<>
			{isModal ? (
				<ModalBackground>
					<ModalBox>
						<ModalBtn onClick={ModalHandler}>X</ModalBtn>
						<span>ID</span>
						<input type="id" />
						<span>PASSWORD</span>
						<input type="password" name="" id="" />
						<button>로그인</button>
						<button>회원가입</button>
					</ModalBox>
				</ModalBackground>
			) : (
				<FaUser className="user" onClick={ModalHandler} />
			)}
		</>
	);
}
