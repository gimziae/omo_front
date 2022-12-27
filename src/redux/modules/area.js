// 초기 상태값
const initState = {};

// 액션타입 선언
const SAVE = "area/SAVE";
const LOAD = "area/LOAD";

// 액션타입 생성함수
export function save(areaInfo) {
	return {
		type: SAVE,
		payload: areaInfo,
	};
}

export function load() {
	return {
		type: LOAD,
	};
}

// 리듀서 생성
export default function area(state = initState, action) {
	switch (action.type) {
		case SAVE:
			return {
				...state,
				areaInfo: action.payload,
			};
		case LOAD:
			return {
				...state,
			};
		default:
			return state;
	}
}
