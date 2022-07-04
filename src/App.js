import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
