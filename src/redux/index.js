import { combineReducers } from "redux"; // 합치는 거
import user from "./modules/user";
import area from "./modules/area";
// 내보내기
export default combineReducers({ user, area });
