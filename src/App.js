import { Route, Routes } from "react-router-dom";

import "./scss/style.scss";

// pages
import Main from "./pages/Main";

import Login from "./components/user/Login";
import Register from "./components/user/Register";

import UserBoard from "./pages/UserBoard";
import Diary from "./pages/board/Diary";
import DiaryWrite from "./pages/board/DiaryWrite";
import DiaryModify from "./pages/board/DiaryModify";
import Calendar from "./pages/board/Calendar";

import Tour from "./pages/place/Tour";
import Culture from "./pages/place/Culture";
import Food from "./pages/place/Food";
import DetailView from "./components/place/DetailView";

function App() {
	return (
		<div className="App">
			<Routes>
				{/* 메인 */}
				<Route path="/" element={<Main />} />

				{/* 로그인 */}
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />

				{/* 회원페이지 */}
				<Route path="/board" element={<UserBoard />} />
				{/* 회원페이지 - 다이어리 */}
				<Route path="/diary" element={<Diary />} />
				<Route path="/diary/write" element={<DiaryWrite />} />
				<Route path="/diary/modify" element={<DiaryModify />} />
				{/* 회원페이지 - 일정 */}
				<Route path="/calendar" element={<Calendar />} />

				{/* 가볼만한 곳 */}
				<Route path="/tour" element={<Tour />} />
				<Route path="/tour/:contentid" element={<DetailView />} />

				{/* link 수정진행 */}
				{/* 문화시설 */}
				<Route path="/culture" element={<Culture />} />
				<Route path="/culture/:contentid" element={<DetailView />} />

				{/* 식당 */}
				<Route path="/food" element={<Food />} />
				<Route path="/food/:contentid" element={<DetailView />} />
			</Routes>
		</div>
	);
}

export default App;
