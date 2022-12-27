import React from "react";
import Header from "../components/Header";
import PopularArea from "../components/tour/PopularArea";
import TourArea from "../components/tour/TourArea";
import { Link } from "react-router-dom";

export default function Tour() {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/tour">관광지</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/culture">문화시설</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/food">식당</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="contentsWrap">
        <PopularArea />
        <TourArea />
      </div>
    </>
  );
}
