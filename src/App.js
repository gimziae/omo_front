import { Route, Routes } from "react-router-dom";

import KakaoRedirectHandler from "./components/user/KakaoRedirectHandler";

import "./scss/style.scss";

// pages
import Main from "./pages/Main";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Diary from "./pages/Board/Diary";
import Calendar from "./pages/Board/Calendar";
import Calculate from "./pages/Board/Calculate";
import Board from "./pages/Board/Board";
import Tour from "./pages/Tour";
import RestaurantPage from "./components/Tour/RestaurantPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/board" element={<Board />} />
				<Route path="/diary" element={<Diary />} />
				<Route path="/calender" element={<Calendar />} />
				<Route path="/calculate" element={<Calculate />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/oauth/callback/kakao"
					element={<KakaoRedirectHandler />}
				/>
				<Route path="/tour" element={<Tour />} />
				<Route path="/tourmore" element={<RestaurantPage />} />
			</Routes>
		</div>
	);
}

export default App;
