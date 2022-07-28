import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./components/home/home.component";
import CardDetails from "./components/card/cardDetails.component";
import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import Host from "./components/become a host/host.component";

const App = () => {
  return (
    <Router className="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </Router>
  );
};

export default App;
