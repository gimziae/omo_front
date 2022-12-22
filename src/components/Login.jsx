import { useRef } from "react";

import { NavLink } from "react-router-dom";
import Header from "./Header";

export default function Login() {
	const inputId = useRef();
	const inputPw = useRef();
	return (
		<>
			<Header />
			<div className="login-wrap">
				<div className="loginBox">
					<form action="post">
						<h1>로그인</h1>
						<p className="register">
							아직 회원이 아니시라면?
							<NavLink to="/register">회원가입</NavLink>
						</p>

						<br />
						<label>아이디</label>
						<br />
						<input ref={inputId} placeholder="ex)abc@omo.com" />
						<br />
						<label>비밀번호</label>
						<br />
						<input
							ref={inputPw}
							placeholder="비밀번호를 입력하세요."
						/>
						<br />
						<div className="loginBtn">
							<button>로그인</button>
							<a href="#" className="kakaoLogin">
								카카오 로그인
							</a>
						</div>
						<br />
					</form>
				</div>
			</div>
		</>
	);
}
