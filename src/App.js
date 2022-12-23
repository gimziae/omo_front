import { Route, Routes } from "react-router-dom";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Board from "./pages/Board";
import Calender from "./pages/Calender";
import KakaoRedirectHandler from "./components/user/KakaoRedirectHandler";

import Main from "./pages/Main";

import "./scss/style.scss";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/board" element={<Board />} />
				<Route path="/calender" element={<Calender />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/oauth/callback/kakao"
					element={<KakaoRedirectHandler />}
				/>
			</Routes>
		</div>
	);
}

export default App;
