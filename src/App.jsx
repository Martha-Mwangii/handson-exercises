import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Day3/Navbar";
import Day1 from "./components/Day1/Day1";
import Day2 from "./components/Day2/Day2";
import Day3 from "./components/Day3/Day3";
import Day4 from "./components/Day4/Day4";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
      </Routes>
    </Router>
  );
}

export default App;
