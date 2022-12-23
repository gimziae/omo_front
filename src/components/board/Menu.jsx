import React from "react";

export default function Menu() {
  return (
    <>
      <div class="header">
        <div class="search">
          <i class="material-icons">search</i>
          <input type="text"></input>
          <button>GO!</button>
        </div>
      </div>
      <br />
      <div className="side">
        <div className="inner">
          <span>MENU</span>
          <br />
          <div className="menu">
            <button type="calender">♦︎ 캘린더</button>
            <br />
            <button type="diary">♦︎ 공유 다이어리</button>
            <br />
            <button type="diary">♦︎ 저장 목록</button>
          </div>
        </div>
      </div>
    </>
  );
}
