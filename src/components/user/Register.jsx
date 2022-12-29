import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function Register() {
	const userIdInput = useRef();
	const userPwInput = useRef();
	const userNameInput = useRef();

	const navigate = useNavigate();

	async function registerUser() {
		const userInfo = {
			email: userIdInput.current.value,
			password: userPwInput.current.value,
			name: userNameInput.current.value,
		};

		if (
			userInfo.email !== "" &&
			userInfo.password !== "" &&
			userInfo.name !== ""
		) {
			const registerResponse = await fetch(
				"http://localhost:4000/auth/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userInfo),
				}
			);
			if (registerResponse.status === 201) {
				const result = await registerResponse.json();
				if (result) {
					alert("회원가입이 완료 됐습니다!🎉");
					navigate("/login");
				}
			}
		} else {
			alert(
				"이름, 아이디(이메일), 비밀번호를 형식에 맞게 입력해 주세요!"
			);
		}
	}
	return (
		<>
			<Header />
			<div className="register-wrap">
				<div className="registerBox">
					<div>
						<h1>회원 가입</h1>
						<label>이름</label>
						<br />
						<input
							ref={userNameInput}
							placeholder="이름을 입력해 주세요."
						/>{" "}
						<br />
						<label>아이디(이메일)</label>
						<br />
						<input
							ref={userIdInput}
							type="email"
							placeholder="ex)hello@omo.com"
						/>
						<br />
						<label>비밀번호</label>
						<br />
						<input
							ref={userPwInput}
							type="password"
							placeholder="영문, 숫자 포함 8글자 이상"
						/>
						<br />
						<button onClick={() => registerUser()}>
							회원 등록
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
