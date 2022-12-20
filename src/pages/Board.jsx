import React from "react";
import Header from "../components/Header";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-light-svg-icons";

export default function Board() {
  return (
    <>
      <Header />
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
          <div className="stars">
            <form action="">
              <input type="checkbox" name="star1" id="star" />
              <label className="star1"></label>
              <input type="checkbox" name="star2" id="star" />
              <label className="star2"></label>
              <input type="checkbox" name="star3" id="star" />
              <label className="star3"></label>
              <input type="checkbox" name="star4" id="star" />
              <label className="star4"></label>
              <input type="checkbox" name="star5" id="star" />
              <label className="star5"></label>
            </form>
          </div>
          <br />
          {/* <FontAwesomeIcon icon="fa-light fa-star" />
          <FontAwesomeIcon icon={faStar} /> */}
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
