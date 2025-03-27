import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"; // Ensure this CSS is included
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <h2 style={{ color: "white" }}>DJJK's Portfolio</h2>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
  <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
  <li><Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>  {/* Added Education */}
  <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
  <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
  {/* <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>  Moved Blog Up */}
</ul>
    </nav>
  );
};
export default Navbar;