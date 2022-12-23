import React, { useRef } from "react";
import Header from "../Header";

export default function Register() {
	const userIdInput = useRef();
	const userPwInput = useRef();
	const userNameInput = useRef();
	return (
		<>
			<Header />
			<div className="register-wrap">
				<div className="registerBox">
					<form action="get">
						<h1>회원 가입</h1>
						<label>이름</label>
						<br />
						<input
							type={userNameInput}
							placeholder="이름을 입력해 주세요."
						/>{" "}
						<br />
						<label>아이디(이메일)</label>
						<br />
						<input
							type={userIdInput}
							placeholder="ex)hello@omo.com"
						/>
						<br />
						<label>비밀번호</label>
						<br />
						<input
							type={userPwInput}
							placeholder="영문, 숫자 포함 8글자 이상"
						/>
						<br />
						<button>회원 등록</button>
					</form>
				</div>
			</div>
		</>
	);
}
