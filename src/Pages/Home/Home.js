import React from "react";
import "./Home.css";
import HomeHeader from "./HomeHeader";
import HomeGrid from "./HomeGrid";

export default function Home() {
  return (
    //  Potentially could use unsplash api to find images for the products
    <main className="outer-wrapper">
      <div className="inner-wrapper">
        <HomeHeader />
        <HomeGrid />
      </div>
    </main>
  );
}
