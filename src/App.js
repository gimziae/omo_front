import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Board from "./pages/Board";
import Calendar from "./pages/Calendar";

import Main from "./pages/Main";

import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
