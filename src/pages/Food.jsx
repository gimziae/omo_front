import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import FoodPopularArea from "../components/food/FoodPopularArea";
import FoodArea from "../components/food/FoodArea";

export default function CultureMain() {
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
      <FoodPopularArea />
      <FoodArea />
    </>
  );
}
