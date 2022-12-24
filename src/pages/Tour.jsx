import React from "react";
import Header from "../components/Header";
import PopularArea from "../components/tour/PopularArea";
import Restaurant from "../components/tour/Restaurant";
import TourArea from "../components/tour/TourArea";

export default function Tour() {
  return (
    <>
      <Header />
      <PopularArea />
      <TourArea />
      <Restaurant />
    </>
  );
}
