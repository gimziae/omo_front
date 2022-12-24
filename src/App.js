import { Route, Routes } from "react-router-dom";

import KakaoRedirectHandler from "./components/user/KakaoRedirectHandler";

import "./scss/style.scss";

// pages
import Main from "./pages/Main";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Diary from "./pages/board/Diary";
import Calendar from "./pages/board/Calendar";

import Tour from "./pages/Tour";
import RestaurantPage from "./components/tour/RestaurantPage";
import UserBoard from "./pages/UserBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<UserBoard />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tourmore" element={<RestaurantPage />} />
      </Routes>
    </div>
  );
}

export default App;
