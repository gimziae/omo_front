import React from "react";

import Header from "../components/Header";
import Profile from "../components/board/Profile";
import Calender from "./board/Calendar";
import Diary from "./board/Diary";
import { useState } from "react";
import Content from "./board/Content";

const menuList = [
  {
    id: 0,
    name: "일정",
    componentName: "calendar",
    component: <Calender />,
  },
  {
    id: 1,
    name: "다이어리",
    componentName: "diary",
    component: <Diary />,
  },
  {
    id: 2,
    name: "todolist",
    componentName: "todolist",
    component: <Content />,
  },
];

export default function UserBoard() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Header />
      <section id="board">
        <div className="wrap">
          <div className="left">
            <Profile />
            <hr />
            <h3>MENU</h3>
            <ul className="menu">
              {menuList.map((item) => (
                <li key={item.id} className={item.componentName} onClick={() => setIndex(item.id)}>
                  - {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            {menuList
              .filter((item) => index === item.id)
              .map((item) => (
                <div className={item.componentName} key={item.id}>
                  {item.component}
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
