import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import CardDetails from "./components/card/cardDetails.component";

const App = () => {
  return (
    <Router className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
