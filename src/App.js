import { Route, Routes } from "react-router-dom";

// import KakaoRedirectHandler from "./components/user/KakaoRedirectHandler";

import "./scss/style.scss";

// pages
import Main from "./pages/Main";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Diary from "./pages/board/Diary";

import Diary1st from "./pages/board/Diary1st";
import DiaryModify from "./pages/board/DiaryModify";
import Calendar from "./pages/board/Calendar";

import Tour from "./pages/Tour";
import UserBoard from "./pages/UserBoard";
import Calender from "./pages/board/Calendar";
import TourDetail from "./components/tour/TourDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<UserBoard />} />
        <Route path="/diary/1st" element={<Diary1st />} />
        <Route path="/diary/write" element={<Diary />} />
        <Route path="/diary/modify" element={<DiaryModify />} />
        <Route path="/calender" element={<Calendar />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/tour/:index" element={<TourDetail/>} />
      </Routes>
    </div>
  );

}

export default App;
