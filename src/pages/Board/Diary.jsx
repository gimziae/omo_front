import React, { useState } from "react";
import Stars from "../../components/board/Stars";
import Header from "../../components/Header";

export default function Board() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const array = [0, 1, 2, 3, 4];

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };
  let score = clicked.filter(Boolean).length;
  return (
    <>
      {/* section1 */}
      <div className="section1_container">
        <div className="board_header">
          <h1>BOARD PAGE</h1>
        </div>
        <form action="/board/write" method="POST" className="board_form">
          <div className="form_title">
            <h2>title</h2>
            <input type="text" name="title" />
          </div>
          <div className="form_content">
            <h2>content</h2>
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
          </div>
          <div className="form_image">
            <h2>image</h2>
            <input type="file" name="img" />
          </div>
          <br />
          <div className="form_stars">
            <Stars />
          </div>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
