// 초기 상태값
let initState = {
	email: "",
	name: "",
	isLogin: false,
};

//
if (window.localStorage.getItem("user")) {
	initState.email = window.localStorage.getItem("user");
	initState.name = window.localStorage.getItem("name");
	initState.isLogin = true;
}

// 액션타입 선언
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// 액션타입 생성함수
export function login(loginInfo) {
	return {
		type: LOGIN,
		payload: loginInfo,
	};
}

export function logout() {
	return {
		type: LOGOUT,
	};
}

// 리듀서 생성
export default function user(state = initState, action) {
	switch (action.type) {
		case LOGIN:
			//
			window.localStorage.setItem("user", action.payload.email);
			window.localStorage.setItem("name", action.payload.name);
			localStorage.setItem("Token", action.payload.token);
			return {
				...state,
				email: action.payload.email,
				name: action.payload.name,
				isLogin: true,
			};
		case LOGOUT:
			window.localStorage.removeItem("user");
			window.localStorage.removeItem("name");
			return {
				...state,
				isLogin: false,
				email: "",
				name: "",
			};
		default:
			return state;
	}
}
