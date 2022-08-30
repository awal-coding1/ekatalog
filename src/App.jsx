import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  // 👇️ make sure to use your Links ONLY within a <Router> context
  const year = new Date().getFullYear();
  return (
    <>
      <main>
        <Router>
          <div>
            <Navbar />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Router>
      </main>
      <footer className="footer  text-center">
        {" "}
        Create with love Awal {year}
      </footer>
    </>
  );
}
