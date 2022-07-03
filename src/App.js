import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import TopSlider from "./components/top/topSlider.component";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <TopSlider />

      <Home />
    </div>
  );
};

export default App;
