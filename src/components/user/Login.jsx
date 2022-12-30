import { NavLink, useNavigate } from "react-router-dom";
// component
import Header from "../Header";
import Footer from "../Footer";

// react hook
import React, { useRef } from "react";

// redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/modules/user";

export default function Login() {
	// 카카오 로그인
	const KAKAO_CLIENT_ID = "7b6a4c6008b2f50e97c664ebfbbd3920"; // REST API 키
	const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";
	const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

	const inputId = useRef();
	const inputPw = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// 로그인 처리 함수
	async function loginUser() {
		const loginInfo = {
			email: inputId.current.value,
			password: inputPw.current.value,
		};

		if (loginInfo.email !== "" && loginInfo.password !== "") {
			const loginResponse = await fetch(
				"http://localhost:4000/auth/signin",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// Authorization: localStorage.getItem("Token"),
					},
					body: JSON.stringify(loginInfo), // 보낼 값
				}
			);
			if (loginResponse.status === 200) {
				const result = await loginResponse.json();

				if (result) {
					dispatch(login(result));
					navigate("/");
				}
			} else {
				alert("로그인 실패");
				throw new Error("로그인 실패");
			}
		} else {
			alert("아이디 또는 비밀번호를 입력해 주세요.");
		}
	}

	return (
		<>
			<Header />
			<div className="login-wrap">
				<div className="loginBox">
					<div>
						<h1>로그인</h1>
						<p className="register">
							아직 회원이 아니시라면?
							<NavLink to="/register">회원가입</NavLink>
						</p>

						<br />
						<label>아이디(이메일)</label>
						<br />
						<input
							ref={inputId}
							type="email"
							placeholder="ex)abc@omo.com"
						/>
						<br />
						<label>비밀번호</label>
						<br />
						<input
							ref={inputPw}
							type="password"
							placeholder="비밀번호를 입력하세요."
						/>
						<br />
						<div className="loginBtn">
							<button
								onClick={() => {
									loginUser();
								}}>
								로그인
							</button>
							<a href={KAKAO_AUTH_URL} className="kakaoLogin">
								카카오 로그인
							</a>
						</div>
						<br />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
