import './App.css';

function Blog() {
  return (
    <div className="background">
      <nav className="navbar">
        <div className="logo">kethsi's Blog</div>
        <ul className="menu">
          <li className="menu-item"><button className="nav-button fancy-button">Home</button></li>
          <li className="menu-item"><button className="nav-button fancy-button">About</button></li>
          <li className="menu-item"><button className="nav-button fancy-button">Projects</button></li>
          <li className="menu-item"><button className="nav-button fancy-button">Contact</button></li>
          <li className="menu-item"><button className="nav-button fancy-button">Blog</button></li>
        </ul>
      </nav>

      <nav className="hero-section">
        <h5>Hey, I'M</h5>
        <h1>DJ.KETHSIYAL</h1>
        <p className="styled-paragraph">A frontend-focused Web Developer building the frontend of <br/> Websites & Web Applications that lead to the success of overall projects.</p>
      </nav>
    </div>
  );
}

export default Blog;
