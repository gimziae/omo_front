// 초기 상태값
const initState = {
	email: "",
	name: "",
	isLogin: false,
};

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
			return {
				...state,
				email: action.payload.email,
				name: action.payload.name,
				isLogin: true,
			};
		case LOGOUT:
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
