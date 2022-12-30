import { Route, Routes } from "react-router-dom";

import "./scss/style.scss";

// pages
import Main from "./pages/Main";

import Login from "./components/user/Login";
import Register from "./components/user/Register";

import UserBoard from "./pages/UserBoard";

import Tour from "./pages/place/Tour";
import Culture from "./pages/place/Culture";
import Food from "./pages/place/Food";
import DetailView from "./pages/DetailView";
import Diary from "./pages/board/Diary";
import Place from "./pages/Place";

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
				<Route path="/diary" element={<Diary />} />

				<Route path="/place" element={<Place />} />

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
