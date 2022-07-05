import React from "react";
import data from "../../data.json";
import Card from "../card/card.component";
import TopSlider from "../top/topSlider.component";

import "./home.style.css";

const Home = () => {
  return (
    <div className="home">
      <TopSlider />

      <div className="home__container">
        {data.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
