import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";  
import About from "./pages/About";
import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
