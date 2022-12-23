// 초기 상태값
const initState = {
	userId: "",
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
				userId: action.payload.id,
				isLogin: true,
			};
		case LOGOUT:
			return {
				...state,
				isLogin: false,
				userId: "",
			};
		default:
			return state;
	}
}
