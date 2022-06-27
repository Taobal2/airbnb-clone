import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Card from "./components/card/card.component";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Card />
    </div>
  );
};

export default App;
