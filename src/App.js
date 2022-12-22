import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Diary from "./pages/Board/Diary";
import Calendar from "./pages/Board/Calendar";
import Calculate from "./pages/Board/Calculate";

import Main from "./pages/Main";

import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
    </div>
  );
}

export default App;
