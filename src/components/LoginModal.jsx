import React, { useState } from "react";
import styled from "styled-components";

import { FaUser } from "react-icons/fa";

const ModalBtn = styled.button`
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
				<div className="modal">
					<div className="modalBox">
						<ModalBtn onClick={ModalHandler}>X</ModalBtn>
						HELLO CODESTATES!
					</div>
				</div>
			) : (
				<FaUser className="user" onClick={ModalHandler} />
			)}
		</>
	);
}
